import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              <a href='https://www.facebook.com/MaziarMajd13/'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='https://www.linkedin.com/in/maziarmajd/'>
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a href='https://twitter.com/MajdMaziar'>
                <i className='fa fa-twitter-square'></i>
              </a>
              <a href='https://github.com/Maziarmajd'>
                <i className='fa fa-github-square'></i>
              </a>
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              {" "}
              Hello, I'M <span className='highlighted-text'>Maziar</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 🌐",
                    2000,
                    "FullStack Developer 🧑🏻‍💻",
                    2000,
                    "FrontEnd Developer 🖥️",
                    2000,
                    "Ui/Ux designer 🎨",
                    2000,
                    "React Dev 💻",
                    2000,
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'>
              {""}
              Hire Me{" "}
            </button>
            <a href='MaziarMajdCV.pdf' download='MaziarMajdCV.pdf'>
              <button className='btn highlighted-btn'>Get My CV</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  );
}
