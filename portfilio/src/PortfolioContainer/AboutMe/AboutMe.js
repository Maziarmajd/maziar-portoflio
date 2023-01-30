import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animation from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
    const SCREEN_CONSTANTS = {
      description:
        "A hardworking and ambitious developer who is dedicated to providing the highest quality product. My skills as a developer include dedication, motivation, organization, and a desire to learn new skills through challenges. My background in architecture allows me to apply my design knowledge and creativity to improve app designs.",
        highlights: {
            bullets:[
                "Javascript",
                "HTML/ CSS",
                "Node.js",
                "React.js",
                "PostgreSQL",
                "GitHub/Git",
            ],
            heading: "Skills:"
        }
    };

    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className="highlight" key={i}>
                    <div className="highlight-blob"></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div className='about-me-parent'>
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>
              {SCREEN_CONSTANTS.description}
            </span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className='about-me-options'>
              <button className='btn primary-btn'>
                {""}
                Hire Me{" "}
              </button>
              <a href='MaziarMajdCV.pdf' download='MaziarMajdCV.pdf'>
                <button className='btn highlighted-btn'>Get My CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
