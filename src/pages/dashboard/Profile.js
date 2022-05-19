import React, { useState, useEffect } from "react";
import style from "../../styles/Profile.module.css";
import { useForm } from "react-hook-form";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const initialValues = { firstName: "", lastName: "", company: "", number:"", occupation:"", address:"", email:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [User, setUser] = useState([]);

  const notify = () => toast("Profile updated");
 
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // onsubmit will not run if error there is an error state
    console.log(data);
  };
 
  useEffect(() => {

      let formValues;
      axiosPrivate.get(`/auth`).then((res) => {
        formValues = res.data;
        setFormValues(formValues);
        setValue("firstName", formValues.firstName);
        setValue("lastName", formValues.lastName);
        setValue("company", formValues.company);
        setValue("number", formValues.number);
        setValue("address", formValues.address);
        setValue("email", formValues.email);
      });
    
  }, []);
 
  
  const handleUpdate = (data) => {
    let User;
    axiosPrivate
     .put("/auth", {...data}).then((res)=>{
       console.log(res.data)
       notify();
     }).catch((error) => {
       console.log(error)
     })
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
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit(handleUpdate)}>
          <div>
            <input
              {...register("firstName", { required: "First name is required", minLength: { value: 5, message: "Minimum is 5 characters" } })}
              placeholder="First name"
            />
          </div>
          <span>{errors.firstName?.message}</span>
          <div>
            <input
              {...register("lastName", {
                required: "Last name is required",
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Last name"
            />
          </div>
          <span>{errors.lastName?.message}</span>
          <div>
            <input
              {...register("company", {
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Company"
            />
          </div>
          <span>{errors.company?.message}</span>
          <div>
            <input
              {...register("number", {
                minLength: { value: 5, message: "Minimum is 5 numbers" },
                pattern: { value: /^[0-9]*$/, message: "Numbers only!" },
              })}
              placeholder="Number"
            />
          </div>
          <span>{errors.number?.message}</span>
          <div>
            <input
              {...register("occupation", {
                required: "Occupation is required",
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Occupation"
            />
          </div>
          <span>{errors.occupation?.message}</span>
          <div>
            <input
              {...register("address", {
                required: "Address is required",
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Address"
            />
          </div>
          <span>{errors.address?.message}</span>
          <div>
            <input
              {...register("email", {
                required: "Email is required",
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message: "Invalid email format" },
              })}
              placeholder="Email"
            />
          </div>
          <span>{errors.email?.message}</span>
          {/* {User.map((t) => {
                  return (
                    <option value={t.id} key={t.id}>
                      {t.name}
                    </option>
                  );
                })} */}

          {/* <div><input placeholder='Company'/></div>
          <div><input placeholder='Occupation'/></div>
          <div><input placeholder='Phone number'/></div>
          <div><input placeholder='Email'/></div>
          <div><input placeholder='Password'/></div>
          <div><input placeholder='Confirm password'/></div> */}
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default Profile;
