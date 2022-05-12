import React, { useState, useEffect } from "react";
import style from '../styles/Register.module.css';

function Register() {
  const initialValues = { projectname: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.projectname) {
      errors.projectname = "Required field!";
    }

    return errors;
  };

  

  return (
    <div className="Registercontainer">
      <nav className={style.nav_bar}>
        <h1>Project Registration Form</h1>
        <img src={"/assets/images/logo.png"} className={style.app_logo} alt="logo" />
      </nav>
      
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div class ="card" className={style.register}>  
        <div>
       
        <h1>Registration Form</h1>
        <div className="field">
            <label className={style.tittle1}> 1. Project Name</label>
            <p className="subhead1">What is your project name or tittle?</p>
            <input
              type="text"
              name="projectname"
              placeholder="Project name"
              value={formValues.projectname}
              onChange={handleChange}

            />
          </div>
          <p className ={style.text}>{formErrors.projectname}</p>

          <div className="field">
            
          <label className={style.tittle1}>2. Project Type </label>
            <p className={style.subhead1}> Select your project type, or use other for different type</p>
            <select>
                <option value="project type" selected disabled>
                </option>
                <option value="others">others</option>
                <option value="Registration System">Registration System</option>
                <option value="Point of Sale System">Point of Sale System</option>
                <option value="Grading System">Grading System</option>
                <option value="Hospital Management System">Hospital Management System</option>
              </select>
          </div>
          
          
          
          <div className="field">
            <label className={style.tittle1}> 3. Platform</label>
            <p className={style.subhead1}> Choose your platform. (This will determine the price of your project)</p>
            <select>
                <option value="project type" selected disabled>
                </option>
                <option value="Android/IOS">Android/IOS</option>
                <option value="Website">Website</option>
                <option value="Desktop App/Web">Desktop App/Web</option>
              </select>
          </div>

          
          <button className={style.sbutton} type="submit">Submit</button>
        </div>
        </div> 
      </form>
    </div>
    
  );
}

export default Register;