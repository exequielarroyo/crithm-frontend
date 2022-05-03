import React from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  return (
    <div>
      Unauthorized
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default Unauthorized;
