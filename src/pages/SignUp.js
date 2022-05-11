import { useState, useEffect } from "react";
import React from "react";
import style from '../styles/SignUp.module.css';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const initialValues = { fullname:"", username: "", email: "", password: "" ,occupation:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    console.log('registered');
    navigate ('/dashboard', { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.fullname) {
      errors.fullname = "Full name is required!";
    }
    if (!values.occupation) {
      errors.occupation = "Occupation is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length <= 5) {
      errors.password = "Password must be more than 5 characters";
    } 
    return errors;
  };

  return (
    <div className="SignUpcontainer">
      
      <nav className={style.nav_bar}>
        <h1>Sign Up Page</h1>
        <img src={"/assets/images/logo.png"} className={style.app_logo} alt="logo" />
      </nav>
      
      <form onSubmit= {handleSubmit}>
        <div class ="card" className={style.uiform}>  
        <div>
       
        <h1>Sign Up Now!</h1>
        <h2 className={style.subHead}> Please fill up the informations below! </h2>
        <div className="field">
            <label>Fullname</label>
            <input className={style.input}
              type="text"
              name="fullname"
              placeholder="Full name"
              value={formValues.fullname}
              onChange={handleChange}
            />
          </div>
          <p className ={style.text}>{formErrors.fullname}</p>

          <div className="field">
            
            <label>Occupation</label>
            <input className={style.input}
              type="text"
              name="occupation"
              placeholder="Occupation"
              value={formValues.occupation}
              onChange={handleChange}
            />
          </div>
          <p className ={style.text}>{formErrors.occupation}</p>
          
          
          <div className="field">
            <label>Username</label>
            <input className={style.input}
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className ={style.text}>{formErrors.username}</p>
          
          
          <div className="field">
            <label>Email</label>
            <input className={style.input}
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className={style.text}>{formErrors.email}</p>

          <div className="field">
            <label>Password</label>
            <input className={style.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p className={style.text}>{formErrors.password}</p>
          <button className= {style.buttonSub}>Submit</button>
        </div>
        </div> 
      </form>
    </div>
    
  );
}

export default SignUp;