import Card from '../components/Card';
import './Project.css';

const Project = () => {
  return (
    <div className='project'>
      <div className='header'>
        <h1>Add Project</h1>
        <div>
          <button>Create Project</button>
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

      <div className='ellipse3'></div>
      <div className='ellipse4'></div>
    </div>
  );
};

export default Project;
