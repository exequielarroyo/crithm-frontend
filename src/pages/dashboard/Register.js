import React, { useState, useEffect } from "react";
import style from "../../styles/Register.module.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

function Register() {
  const initialValues = { name: "", description: "" };
  const axiosPrivate = useAxiosPrivate();
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    if (id !== "create") {
      axiosPrivate.get(`/project/${id}`).then((res) => {
        setFormValues(res.data);
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosPrivate
      .post("/project", { ...formValues })
      .then((res) => {
        const project = res.data;
        if (id === "create") navigate(`/dashboard/register/${project.id ? project.id : id}/review`, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });

    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const handleUpdate = () => {
    console.log("update");
    axiosPrivate
      .put(`/project/${id}`, { ...formValues })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required field!";
    }

    if (!values.description) {
      errors.description = "Required field!";
    }

    return errors;
  };

  return (
    <div className="Registercontainer">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        <div class="card" className={style.register}>
          <div>
            <h1>Registration Form</h1>
            <div className="field">
              <label className={style.tittle1}> 1. Project Name</label>
              <p className="subhead1">What is your project name or tittle?</p>
              <input type="text" name="name" placeholder="Project name" value={formValues.name} onChange={handleChange} />
            </div>
            <p className={style.text}>{formErrors.name}</p>

            <div className="field">
              <label className={style.tittle1}> 2. Details </label>
              <p className="subhead1">What is your project description?</p>
              <input type="text" name="description" placeholder="Description" value={formValues.description} onChange={handleChange} />
            </div>
            <p className={style.text}>{formErrors.description}</p>

            <div className="field">
              <label className={style.tittle1}>3. Project Type </label>
              <p className={style.subhead1}> Select your project type, or use other for different type</p>
              <select>
                <option value="project type" selected disabled></option>
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
                <option value="project type" selected disabled></option>
                <option value="Android/IOS">Android/IOS</option>
                <option value="Website">Website</option>
                <option value="Desktop App/Web">Desktop App/Web</option>
              </select>
            </div>
            {id !== "create" ? (
              <button className={style.sbutton} onClick={handleUpdate}>
                Update
              </button>
            ) : (
              <button className={style.sbutton} type="submit">
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
