import React from "react";
import Typical from "react-typical";
import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='main-container' id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className='central-form'>
        <div className='col'>
          <h2 className='title'>
            {" "}
            <Typical loop={Infinity} steps={["Get In Touch 📧", 2000]} />
          </h2>
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
    </div>
  );
}
