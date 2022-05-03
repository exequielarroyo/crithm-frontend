import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, description }) => {
  return (
    <div className='card'>
      {!title ? (
        <div className='icon'>
          <FontAwesomeIcon icon='fa-solid fa-plus' size='6x' />
        </div>
      ) : (
        <div className='inside-card'>
          <h2>{title}</h2>
          <p className='p'>{description}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
