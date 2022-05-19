import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const ForgotRequest = () => {
  const { register, handleSubmit } = useForm();
  const axiosPrivate = useAxiosPrivate();
  const { id, token } = useParams();
  const navigate = useNavigate();

  
  function handleRequest(data) {
    axiosPrivate.post(`/password/forgot`, {...data}).then(res=>{
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleRequest)}>
        <input placeholder="Email" name="email" {...register("email")} />
        <button type="submit">Ask reset</button>
      </form>
    </div>
  )
}

export default ForgotRequest