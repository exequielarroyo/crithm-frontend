import React, { useState } from "react";
import style from "../../styles/Profile.module.css";
import { useForm } from "react-hook-form";

const Profile = () => {
  const [formError, setFormError] = useState();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // onsubmit will not run if error there is an error state
    console.log(data);
  };

  // console.log(watch("example"));
  // console.log(errors);

  return (
    <>
      {/* <form method='POST' action={`${process.env.REACT_APP_URL}/upload`} encType='multipart/form-data'>
        <input type='file' name='image' />
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
          }}>
          Submit
        </button>
        <input type='submit' />
      </form> */}

      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("firstName", { required: "First name is required", minLength: { value: 2, message: "Minimum is 2 characters" } })}
              placeholder="First name"
            />
          </div>
          <span>{errors.firstName?.message}</span>
          <div>
            <input
              {...register("lastName", {
                required: "Last name is required",
                minLength: { value: 2, message: "Minimum is 2 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Last name"
            />
          </div>
          <span>{errors.lastName?.message}</span>
          <select {...register("gender", { required: "Choose gender" })}>
            <option value="" hidden>Gender</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <span>{errors.gender?.message}</span>
          {/* <div><input placeholder='Company'/></div>
          <div><input placeholder='Occupation'/></div>
          <div><input placeholder='Phone number'/></div>
          <div><input placeholder='Email'/></div>
          <div><input placeholder='Password'/></div>
          <div><input placeholder='Confirm password'/></div> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
