import React from "react";
import "./Register.css";

function Register() {
  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <div className="SignUpcontainer">
      <ellipse className="ellipse"></ellipse>
      <ellipse className="ellipse1"></ellipse>
      <ellipse className="ellipse2"></ellipse>
      <ellipse className="ellipse3"></ellipse>
      
      <nav className="nav_bar">
        <h1>Project Registration Form</h1>
        <img src={"/assets/images/logo.png"} className="app_logo" alt="logo" />
      </nav>
      
      <form onSubmit={(e)=>{handleSubmit(e)}}>
        <div class ="card" className="register">  
        <div>
       
        <h1>Registration Form</h1>
        <div className="field">
            <label className="tittle1"> 1. Project Name</label>
            <p className="subhead1">What is your project name or tittle?</p>
            <input
              type="text"
              name="projectname"
              placeholder="Project name"

            />
          </div>

          <div className="field">
            
          <label className="tittle1">2. Project Type </label>
            <p className="subhead1"> Select your project type, or use other for different type</p>
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
            <label className="tittle1"> 3. Platform</label>
            <p className="subhead1"> Choose your platform. (This will determine the price of your project)</p>
            <select>
                <option value="project type" selected disabled>
                </option>
                <option value="Android/IOS">Android/IOS</option>
                <option value="Website">Website</option>
                <option value="Desktop App/Web">Desktop App/Web</option>
              </select>
          </div>

          
          <button className="sbutton" type="submit">Submit</button>
        </div>
        </div> 
      </form>
    </div>
    
  );
}

export default Register;