import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import style from "../../../styles/Paypal.module.css";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";

const Paypal = ({ amount = 11000 }) => {
  const [{ options }, dispatch] = usePayPalScriptReducer();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  // useEffect(() => {
  // dispatch({
  //   type: "resetOptions",
  //   value: {
  //     ...options,
  //     currency: "PHP",
  //   },
  // });
  // }, []);

  return (
    <div>
      <div className={style.container}>
        {
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order
                .create({
                  purchase_units: [
                    {
                      amount: {
                        currency_code: "PHP",
                        value: amount,
                      },
                    },
                  ],
                })
                .then((orderId) => {
                  // Your code here after create the order
                  return orderId;
                });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                axiosPrivate
                  .put(`/auth`, { isPaid: true })
                  .then((res) => {
                    console.log(details);
                    navigate("/dashboard/payment/receipt");
                  })
                  .catch((err) => {
                    console.log(err);
                  });

                const name = details.payer.name.given_name;
                // alert(`Transaction completed by ${name}`);
              });
            }}
          />
        }
      </div>
    </div>
  );
};

export default Paypal;
