import React from 'react';
import "../styles/profileCard.css";

function ProfileCard() {
  return (
    <>
      <header className='header'>
        <div className='img'>
           
          <img src='/logo.jpeg' alt='logo' />
          <span className="vertical-line-head"></span>
          <span className='head-name'> STORIES</span>
        </div>

        <button>Courses</button>
      </header>
    </>
  )
}

export default ProfileCard;
