import React, { useState, useEffect } from "react";
import style from "../../styles/Register.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useForm } from "react-hook-form";

function Register() {
  const initialValues = { name: "", description: "", TypeId: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const axiosPrivate = useAxiosPrivate();
  const [types, setTypes] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let types;
    axiosPrivate
      .get("/type")
      .then((res) => {
        types = res.data;
        setTypes(types);
      })
      .catch((err) => {
        console.log(err);
      });

    if (id !== "create") {
      let formValues;
      axiosPrivate.get(`/project/${id}`).then((res) => {
        formValues = res.data;
        setFormValues(formValues);
        setValue("name", formValues.name);
        setValue("description", formValues.description);
        setValue("TypeId", formValues.TypeId);
      });
    }
  }, []);

  const handleForm = (data) => {
    axiosPrivate
      .post("/project", { ...data })
      .then((res) => {
        const project = res.data;
        console.log(project);
        if (id === "create") navigate(`/dashboard/register/${project.id ? project.id : id}/review`, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdate = (data) => {
    if (data.TypeId) {
      axiosPrivate
        .put(`/project/${id}`, { ...data })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="Registercontainer">
      <form onSubmit={id === "create" ? handleSubmit(handleForm) : handleSubmit(handleUpdate)}>
        <div className={style.register}>
          <div>
            <h1>Registration Form</h1>
            <div className="field">
              <label className={style.tittle1}> 1. Project Name</label>
              <p className="subhead1">What is your project name or tittle?</p>
              <input {...register("name", { required: "Required", pattern: { value: /^[A-Za-z]+$/i, message: "Numbers only" } })} />
            </div>
            <p className={style.text}>{errors.name?.message}</p>

            <div className="field">
              <label className={style.tittle1}> 2. Details </label>
              <p className="subhead1">What is your project description?</p>
              <input {...register("description", { required: "Required" })} />
            </div>
            <p className={style.text}>{errors.description?.message}</p>

            <div className="field">
              <label className={style.tittle1}>3. Project Type </label>
              <p className={style.subhead1}> Select your project type, or use other for different type</p>

              <select {...register("TypeId", { required: "Choose project type" })}>
                <option value="" hidden>
                  Project type
                </option>
                {types.map((t) => {
                  return (
                    <option value={t.id} key={t.id}>
                      {t.name}
                    </option>
                  );
                })}
              </select>
            <p className={style.text}>{errors.TypeId?.message}</p>
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
