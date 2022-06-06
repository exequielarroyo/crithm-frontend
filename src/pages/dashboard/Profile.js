import React, { useState, useEffect } from "react";
import style from "../../styles/Profile.module.css";
import { useForm } from "react-hook-form";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { toast } from 'react-toastify';

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
        setValue("occupation", formValues.occupation);
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
      <div className={style.nav_bar}>
      <div className={style.logoContainer}>
      <div className={style.profContainer}>
          <div className={style.content}>
            <h1>PROFILE</h1>
            <div className={style.img}>
              <img src="/assets/images/ring.png" alt="" />
              <img src="/assets/images/curve-line.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className={style.container}>
        <form className={style.form} onSubmit={handleSubmit(handleUpdate)}>
        <h1 className={style.header}>Welcome to your profile page!</h1>
          <div>
            <input className={style.input}
              {...register("firstName", { required: "First name is required", minLength: { value: 5, message: "Minimum is 5 characters" } })}
              placeholder="First name"
            />
          </div>
          <span className={style.errorText}>{errors.firstName?.message}</span>
          <div>
            <input className={style.input}
              {...register("lastName", {
                required: "Last name is required",
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Last name"
            />
          </div>
          <span className={style.errorText}>{errors.lastName?.message}</span>
          <div>
            <input className={style.input}
              {...register("company", {
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Company"
            />
          </div>
          <span className={style.errorText}>{errors.company?.message}</span>
          <div>
            <input className={style.input}
              {...register("number", {
                minLength: { value: 5, message: "Minimum is 5 numbers" },
                pattern: { value: /^[0-9]*$/, message: "Numbers only!" },
              })}
              placeholder="Number"
            />
          </div>
          <span className={style.errorText}>{errors.number?.message}</span>
          <div>
            <input className={style.input}
              {...register("occupation", {
                required: "Occupation is required",
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Occupation"
            />
          </div>
          <span className={style.errorText}>{errors.occupation?.message}</span>
          <div>
            <input className={style.input}
              {...register("address", {
                required: "Address is required",
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[A-Za-z]+$/i, message: "Letters only" },
              })}
              placeholder="Address"
            />
          </div>
          <span className={style.errorText}>{errors.address?.message}</span>
          <div>
            <input className={style.input}
              {...register("email", {
                required: "Email is required",
                minLength: { value: 5, message: "Minimum is 5 characters" },
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message: "Invalid email format" },
              })}
              disabled
              placeholder="Email"
            />
          </div>
          <span className={style.errorText}>{errors.email?.message}</span>
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
