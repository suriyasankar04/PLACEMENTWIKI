import React from 'react';
import './about.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
    const navigate = useNavigate();
    const handleHome = () =>{
        navigate("/");
    }
  return (
    <div className='imgbg'> 
         {/* <div className="navbar"> */}
            <div className='container1'>
        < button className='btn' onClick={handleHome}>
            <svg class="border" viewBox="0 0 180 60" height="60px" width="180px">
          <polyline class="bg-line" points="179,1 179,59 1,59 1,1 179,1"></polyline>
          <polyline class="hl-line" points="179,1 179,59 1,59 1,1 179,1"></polyline>
        </svg>
           <span> HOME  </span> 
          </button>
          <button className='btn'>

        <svg class="border" viewBox="0 0 180 60" height="60px" width="180px">
          <polyline class="bg-line" points="179,1 179,59 1,59 1,1 179,1"></polyline>
          <polyline class="hl-line" points="179,1 179,59 1,59 1,1 179,1"></polyline>
        </svg>
           <span> ABOUTUS  </span> 

            </button>
            </div>
      {/* </div> */}
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-us-heading">About Placement Wiki</h1>
        <p className="about-us-description">
          Placement Wiki is a comprehensive platform that provides detailed information about IT companies. It aims to serve as a valuable resource for future generations by offering insights into various companies, their culture, and work environment.
        </p>
        <p className="about-us-description">
          Our mission is to bridge the gap between job seekers and companies by providing accurate and up-to-date information. We believe that knowledge is power, and through Placement Wiki, individuals can make informed decisions about their career paths and find the perfect fit for their skills and aspirations.
        </p>
        <p className="about-us-description">
          At Placement Wiki, we strive for excellence in delivering reliable information and creating a user-friendly experience. Our team of dedicated professionals is committed to maintaining the highest standards of quality and integrity.
        </p>
        <p className="about-us-description">
          Join us on this exciting journey as we revolutionize the way people explore and understand the IT industry. Whether you are a job seeker, a recruiter, or simply curious about the tech world, Placement Wiki is here to empower you with knowledge and insights.
        </p>
      </div>
      <div className="image-gallery">
        <div className="gallery-image-container">
          <img className="gallery-image" src="https://c4.wallpaperflare.com/wallpaper/283/270/523/business-circuit-computer-internet-wallpaper-preview.jpg" alt="Image 1" />
          <div className="image-overlay">
            <span className="overlay-text">Discover</span>
          </div>
        </div>
        <div className="gallery-image-container">
          <img className="gallery-image" src="https://img.freepik.com/free-photo/business-partners-handshake-global-corporate-with-technology-concept_53876-102615.jpg?w=2000" alt="Image 2" />
          <div className="image-overlay">
            <span className="overlay-text">Explore</span>
          </div>
        </div>
        <div className="gallery-image-container">
          <img className="gallery-image" src="https://wallpaperaccess.com/full/1287689.jpg" alt="Image 3" />
          <div className="image-overlay">
            <span className="overlay-text">Connect</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AboutUs;
