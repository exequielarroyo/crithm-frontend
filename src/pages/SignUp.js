import { useState, useEffect } from "react";
import React from "react";
import style from '../styles/SignUp.module.css';
import { useNavigate, Link } from 'react-router-dom';
import{ axiosDefault } from '../api/axios';



function SignUp() {
  const initialValues = { firstName:"", lastName: "", address: "", company: "", number: "",  email: "", password: "" ,occupation:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    axiosDefault
    .post('/auth/register',{...formValues})
    .then((res) =>{
      navigate('/dashboard',{replace: true})
    })
    .catch((error) => {
      console.log(error)
    }) 
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
    
    if (!values.firstName) {
      errors.firstName = "Firstname is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required!";
    }
    
    if (!values.address) {
      errors.address = "Address is required!";
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
      
      <form  onSubmit= {handleSubmit}>
        <div class ="card" className={style.uiform}>  
        <div>
        
       
        <h1>Sign Up Now!</h1>
        <h2 className={style.subHead}>please fill up all the informations below!</h2>
        <div className="field">
            <label>Firstname</label>
            <input className={style.input}
              type="text"
              name="firstName"
              placeholder="First name"
              value={formValues.firstName}
              onChange={handleChange}
            />
          </div>
          <p className ={style.text}>{formErrors.firstName}</p>

          <div className="field">
            <label>Lastname</label>
            <input className={style.input}
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formValues.lastName}
              onChange={handleChange}
            />
          </div>
          <p className ={style.text}>{formErrors.lastName}</p>

          <div className="field">
            <label>Company (optional)</label>
            <input className={style.input}
              type="text"
              name="company"
              placeholder="Company"
              value={formValues.company}
              onChange={handleChange}
            />
          </div>
          <p className ={style.text}>{formErrors.company}</p>

          <div className="field">
            <label>Number (optional)</label>
            <input className={style.input}
              type="text"
              name="number"
              placeholder="Number"
              value={formValues.number}
              onChange={handleChange}
            />
          </div>
          <p className ={style.text}>{formErrors.number}</p>

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
            <label>Address</label>
            <input className={style.input}
              type="text"
              name="address"
              placeholder="Address"
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <p className ={style.text}>{formErrors.address}</p>
          
          
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
          <button type = 'submit' className= {style.buttonSub}>Submit</button>
          <div className={style.subHead}>Already have an account? <Link to="/signin">Login</Link></div> 
        </div>
        </div> 
      </form>
    </div>
    //onClick={() => {navigate('/dashboard')}}
    
  );
}

export default SignUp;