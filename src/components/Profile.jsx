import React from 'react';
import "../styles/profileCard.css";

function Profile() {
  return (
    <>
      <div className="home">
        <img src="https://i.pinimg.com/originals/21/04/66/2104669ede118c5065faa72d3387fa88.jpg" alt="background-pic" />
      </div>

      <div className="profile">
        <img src="https://assets.website-files.com/624629162e6c5c363b391aee/641827919e9e0b4c88617647_tw34yzndmj7v7z0dj250kd10nqqc5bf6.png" alt="profile-pic" />
      </div>

      <div className="container">
        <h2>Anuj Gosalía <i className="fa-sharp fa-solid fa-gem"></i> <i className="fa-regular fa-circle-check"></i></h2>
        <div className="follower">
          <button className="b1">6482</button>
          <span>Followers</span>
        </div>

        <div className="following">
          <button className="b2">245</button>
          <span>Following</span>
        </div>
      </div>

      <div className="description">
        <p>Co-founder & CEO at Terribly Tiny Tales</p>
        <a href="http://www.instagram.com/anujgosalía
">http://www.instagram.com/anujgosalía
</a>
        <div className="icons">
        <p><i className="ri-star-line"></i> 78</p>
          <p><i className="ri-thumb-up-line"></i> 45</p>
          <p><i className="ri-eye-line"></i> 26</p>
          <p><i className="ri-heart-line"></i> 23</p>
        </div>
      </div>


      <hr className="horizontal-line2" />
      <div className="no-of-posts">
      <h2 className='no-of-post'>132 Posts</h2>
      </div>
    
      <div className="vertical-line"></div>

      <hr className="horizontal-line"/>

    </>
  );
}

export default Profile;
