import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import style from '../styles/ForgotReq.module.css';


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
      <div className={style.logoContainer}>
      <div className={style.reqContainer}>
          <div className={style.content}>
            <h1>Password request</h1>
            <div className={style.img}>
              <img src="/assets/images/ring.png" alt="" />
              <img src="/assets/images/curve-line.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className = {style.bigCont}>
      <div className={style.reqForm} >
        
        <form onSubmit={handleSubmit(handleRequest)}>
        <h1 className={style.header}> Request form </h1>
        
       <img className={style.side_design} src="/assets/images/receipt_side.png" />
          <input placeholder="Email" name="email" {...register("email")}/>
          <button type="submit">Ask reset</button>
          <h2 className = {style.note}>NOTE: Please check your spam mails 
          after asking for a password reset! Thank you.
          </h2>
          
        </form>
      </div>
    </div>
    </>
  );
};

export default ForgotRequest;
