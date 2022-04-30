import React from 'react';

const Card = ({ content, button, img }) => {
  return (
    <div className='Learnmore'>
      <div>
        <div className='img'>{img}</div>
        <p className='content'>{content}</p>
        <div className='button'>{button}</div>
      </div>
    </div>
  );
};

export default Card;
