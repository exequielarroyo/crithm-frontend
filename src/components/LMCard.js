import React from 'react';

const LMCard = ({ lm_content, lm_button, lm_img }) => {
  return (
    <div className='Learnmore'>
      <div>
        <div className='lm_img'>{lm_img}</div>
        <p className='lm_content'>{lm_content}</p>
        <div className='lm_button'>{lm_button}</div>
      </div>
    </div>
  );
};

export default LMCard;
