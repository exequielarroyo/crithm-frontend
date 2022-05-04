import { useEffect, useState } from 'react';
import Card from '../components/Card';
import './Project.css';
import axios from 'axios';
import useRefreshToken from '../hooks/useRefreshToken';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const refresh = useRefreshToken();

  // useEffect(() => {
  //   let isMounted = true;
  //   const controller = new AbortController();

  //   const getProjects = async () => {
  //     try {
  //       axios
  //         .get(`${process.env.REACT_APP_URL}/project`, { signal: controller.signal })
  //         .then((res) => {
  //           console.log(res.data);
  //           isMounted && setProjects(res.data);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   getProjects();

  //   return () => {
  //     isMounted = false;
  //     controller.abort();
  //   };
  // }, []);

  return (
    <div className='project'>
      <div className='header'>
        <h1>Add Project</h1>
        <div>
          <button onClick={()=>refresh()}>Create Project</button>
        </div>
      </div>
      <div className='project-grid'>
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
        />
        <Card
          title={'Software Engineer'}
          description={'Because we’ve been there and done it. When you choose us, you’ll feel the benefit of 15 years’ experience of writing and editing.'}
        />
        <Card />
      </div>

      {/* <div className='ellipse3'></div>
      <div className='ellipse4'></div> */}
    </div>
  );
};

export default Project;
