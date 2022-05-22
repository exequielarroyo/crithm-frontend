import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import style from '../styles/ForgotPass.module.css';

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const axiosPrivate = useAxiosPrivate();
  const { id, token } = useParams();
  const navigate = useNavigate();

  function handlePassword(data) {
    axiosPrivate.post(`/password/reset/${id}/${token}`, {...data}).then(res=>{
      console.log(res.data)
      navigate('/signin')
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="ForgotPasscontainer"> 
      <div className={style.logoContainer}>
      <div className={style.joinContainer}>
          <div className={style.content}>
            <h1>CRITHM</h1>
            <div className={style.img}>
              <img src="/assets/images/ring.png" alt="" />
              <img src="/assets/images/curve-line.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <form  onSubmit= {handleSubmit(handlePassword)}>
        <div class ="card" className={style.uiform}>  
        <div>
        <h1>Change Password</h1>
        <h2 className={style.subHead}>Choose a strong password and don't reuse it for other accounts!</h2>
        <div className="field">
          </div>
          <form onSubmit={handleSubmit(handlePassword)}>
              <input placeholder="Password" name="password" {...register("password")} />
              <button type="submit">Change password</button>
          </form>
        </div>
        </div> 
      </form>
    </div>
  );
}

export default ForgotPassword;