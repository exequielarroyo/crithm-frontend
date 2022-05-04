import { useEffect, useState } from 'react';
import Card from '../components/Card';
import './Project.css';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getProjects = async () => {
      axiosPrivate
        .get(`${process.env.REACT_APP_URL}/project`, { signal: controller.signal })
        .then((res) => {
          console.log(res.data);
          isMounted && setProjects(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getProjects();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div className='project'>
      <div className='header'>
        <h1>Add Project</h1>
        <div>
          <button >Create Project</button>
        </div>
      </div>
      <div className='project-grid'>
        {projects.map((p) => (
          <div key={p.id}>
            <Card title={p.name} description={p.description} />
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
