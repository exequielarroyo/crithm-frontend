import React, { useState, useEffect } from "react";
import style from "../../styles/Register.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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

  const notify = (text) => toast(text);

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
        notify("Project created");
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
          notify("Project updated");
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
            <h1>Project Registration Form</h1>
            <p>First, we need to know a little bit more about your project</p>

            <div className={style.field}>
              <label className={style.tittle1}> 1. Project Name</label>
              <p>What is your project name or title?</p>
              <input className={style.input} {...register("name", { required: "Required" })} placeholder="Project name" />
              <p className={style.text}>{errors.name?.message}</p>
            </div>

            <div className={style.field}>
              <label className={style.tittle1}>3. Project Type </label>
              <p> Select your project type, or use other for different type</p>

              <select className={style.input} {...register("TypeId", { required: "Choose project type" })}>
                <option value="" hidden>
                  Choose project type
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

            <div className={style.field}>
              <label className={style.tittle1}> 2. Details </label>
              <p>What is your project description?</p>
              <textarea
                className={style.textarea}
                {...register("description", { required: "Required" })}
                placeholder="Include all the details you want for your project."
              />
              <p className={style.text}>{errors.description?.message}</p>
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
