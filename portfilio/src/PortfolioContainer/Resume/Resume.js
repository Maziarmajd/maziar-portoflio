import React, { useState } from "react";
import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    <div className='resume-heading'>
      <div className='resume-main-heading'>
        <div className='heading-bullet'>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='resume-sub-heading'>
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className='resume-heading-description'>
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    </div>;
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercantage: 75 },
    { skill: "React.js", ratingPercantage: 75 },
    { skill: "Node.js", ratingPercantage: 70 },
    { skill: "HTML", ratingPercantage: 80 },
    { skill: "CSS", ratingPercantage: 80 },
    { skill: "Rest APIs", ratingPercantage: 60 },
    { skill: "SQL", ratingPercantage: 50 },
    { skill: "Teamwork", ratingPercantage: 90 },
    { skill: "Problem Solving", ratingPercantage: 85 },
    { skill: "Agile Methodologies", ratingPercantage: 80 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS , Bootstrap",
    },
    {
      title: " CYF Developer Planner ",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Developed a web app platform to keep track of CYF graduates'development plans.",
      subHeading:
        "Technologies Used:  React JS , Material UI , PostgresSQL , Axios , Rest API, Express.js",
    },
    {
      title: "Sample Shopping Website ",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "Sample website for shopping bags, just for practice the coding",
      subHeading: "Technologies Used: React JS , Material UI , React Native  ",
    },
  ];

  const resumeDetails = [
    <div className='resume-screen-container' key='education'>
      <ResumeHeading
        heading={"University of Mazandaran, Iran"}
        subHeading={"Bachelor of Architecture Engineering"}
        fromDate={"2003"}
        toDate={"2009"}
      />
      <ResumeHeading
        heading={"Code Your Future"}
        subHeading={"Full-Stack Developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
    </div>,
    <div className='resume-screen-container' key='work-experience'>
      <ResumeHeading
        heading={"Code Your Future, Manchester, UK"}
        subHeading={"Full-Stack Developer"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <div className='experience-description'>
        <span className='resume-description-text'>
          Learned a variety of back-end and front-end programming languages
          including HTML, CSS, Javascript, Node.js, React, and PostgresSQL.
        </span>
      </div>
      <div className='experience-description'>
        <span className='resume-description-text'>
          -Earned and practised Agile Methodologies in a team environment, and
          developed my soft skills such as teamwork, resolving issues, pair
          programming, and presentation
        </span>
        <br />
        <span className='resume-description-text'>
          -Learned to work with GitHub and Git and terminal for different
          projects.{" "}
        </span>
        <br />{" "}
        <span className='resume-description-text'>
          -Participating in weeklyCodewars'Katas improves my problem-solving
          abilities.{" "}
        </span>
        <br />
        <span className='resume-description-text'>
          Created responsive design layouts using JavaScript and JQuery, aiding
          smooth customer experiences.
        </span>
        <br />
        <span className='resume-description-text'>
          -Working on different projects in a demanding environment and enhanced
          my aptitude for learning new skills.
        </span>
        <br />
      </div>
    </div>,
  ];

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animation.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className='resume-container screen-container' id={props.id || ""}>
      <div className='resume-content'>
        <ScreenHeading title={"Resume"} subHeading={"My Details"} />
      </div>
    </div>
  );
}
