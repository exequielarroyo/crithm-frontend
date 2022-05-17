import React, { useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import style from "../../../styles/Paypal.module.css";

const Paypal = ({ amount = 11000 }) => {
  const [{ options  }, dispatch] = usePayPalScriptReducer();

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
      {<PayPalButtons
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
            const name = details.payer.name.given_name;
            // code here
          });
        }}
      />}
        
      </div>
    </div>
  );
};

export default Paypal;
