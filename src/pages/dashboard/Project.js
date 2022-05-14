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

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProjects = async () => {
      try {
        const res = await axiosPrivate.get(`/project`, {
          signal: controller.signal,
        });
        console.log(res.data);
        isMounted && setProjects(res.data);
      } catch (error) {
        console.error(error);
        navigate("/signin", { state: { from: location }, replace: true });
      }
    };

    getProjects();

    return () => {
      isMounted = false;
      // controller.abort();
    };
  }, []);

  return (
    <div className={style.project}>
      <div className={style.header}>
        <h1>Add Project</h1>
        <div>
          <button
            onClick={() => {
              navigate("/dashboard/register");
            }}>
            Create Project
          </button>
          
        </div>
      </div>
      <div className={style.projectGrid}>
        {projects.map((p) => (
          <div key={p.id}>
            <Card title={p.name} description={p.description} id={p.id} />
          </div>
        ))}
        {/* <Card
          title={'Software Engineer'}
          description={'Because we’ve been there and done it. When you choose us, you’ll feel the benefit of 15 years’ experience of writing and editing.'}
        />
        <Card
          title={'Software Engineer'}
          description={'Because we’ve been there and done it. When you choose us, you’ll feel the benefit of 15 years’ experience of writing and editing.'}
        />
        <Card
          title={'Software Engineer'}
          description={'Because we’ve been there and done it. When you choose us, you’ll feel the benefit of 15 years’ experience of writing and editing.'}
        />
        <Card
          title={'Software Engineer'}
          description={'Because we’ve been there and done it. When you choose us, you’ll feel the benefit of 15 years’ experience of writing and editing.'}
        /> */}
        <Card />
      </div>

      {/* <div className='ellipse3'></div>
      <div className='ellipse4'></div> */}
    </div>
  );
};

export default Project;
