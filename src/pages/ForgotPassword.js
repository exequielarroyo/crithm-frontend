import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

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
    <div>
      <form onSubmit={handleSubmit(handlePassword)}>
        <input placeholder="Password" name="password" {...register("password")} />
        <button type="submit">Change password</button>
      </form>
    </div>
  );
}

export default ForgotPassword