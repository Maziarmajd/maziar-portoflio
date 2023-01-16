import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
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
                      1000,
                      "FullStack Developer 🧑🏻‍💻",
                      1000,
                      "FrontEnd Developer 🖥️",
                      1000,
                      "Ui/Ux designer 🎨",
                      1000,
                      "React Dev 💻",
                      1000,
                    ]}
                  />
                </h1>
                <span className='profile-role-tagline'>
                  Knack of building applications with front and back end
                  operations.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
