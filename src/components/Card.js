import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Card = ({ title, description }) => {
  return (
    <div className='card'>
      {!title ? (
        <div className='icon'>
          <FontAwesomeIcon icon={faPlus} size='6x' />
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
