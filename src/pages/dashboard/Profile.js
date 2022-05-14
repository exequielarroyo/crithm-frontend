import React from 'react';
import style from '../../styles/Profile.module.css'

const Profile = () => {
  return (
    <div>
      <form method='POST' action={`${process.env.REACT_APP_URL}/upload`} encType='multipart/form-data'>
        <input type='file' name='image' />
        <button
          type='submit'
          onClick={(e) => {
            e.preventDefault();
          }}>
          Submit
        </button>
        <input type='submit' />
      </form>
    </div>
  );
};

export default Profile;
