import { useEffect, useState } from "react";
import Card from "../../components/Card";
import style from "../../styles/Project.module.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useLocation, useNavigate } from "react-router-dom";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const location = useLocation();
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProjects = async () => {
      try {
        const res = await axiosPrivate.get(`/project`, {
          signal: controller.signal,
        });
        isMounted && setProjects(res.data);
      } catch (error) {
        console.error(error);
        navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getProjects();

    axiosPrivate
      .get("auth")
      .then((res) => {
        setIsPaid(res.data.isPaid);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      isMounted = false;
      // controller.abort();
    };
  }, []);

  const handleClick = () => {
    navigate(`/dashboard/register/create`);
  };

  return (
    <div className={style.project}>
      <div className={style.header}>
        <h1>Add Project</h1>
        <div>
          <button
            onClick={
              isPaid === '1' ? handleClick: ()=>{navigate('/dashboard/payment')}
            }>
            Create Project
          </button>
        </div>
      </div>
      <div className={style.projectGrid}>
        {projects.map((p) => (
          <div key={p.id}>
            <Card title={p.name} description={p.description} id={p.id} isPaid={isPaid} />
          </div>
        ))}
        <Card isPaid={isPaid} />
      </div>
    </div>
  );
};

export default Project;
