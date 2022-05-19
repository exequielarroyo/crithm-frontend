import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotRequest = () => {
  const { register, handleSubmit } = useForm();
  const axiosPrivate = useAxiosPrivate();
  const { id, token } = useParams();
  const navigate = useNavigate();
  const notify = (text) => toast(text);

  function handleRequest(data) {
    axiosPrivate
      .post(`/password/forgot`, { ...data })
      .then((res) => {
        notify("Forgot request sent to email.");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <ToastContainer
        theme="dark"
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <form onSubmit={handleSubmit(handleRequest)}>
          <input placeholder="Email" name="email" {...register("email")} />
          <button type="submit">Ask reset</button>
        </form>
      </div>
    </>
  );
};

export default ForgotRequest;
