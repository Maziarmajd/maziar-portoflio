import React, { useState } from "react";
import "./Resume.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */

  const ResumeHeading = (props) => {
    return (
      <div className='resume-heading'>
        <div className='resume-main-heading'>
          <div className='heading-bullet'></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className='heading-date'>
              {props.fromDate + "-" + props.toDate}
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
    );
  };
  /* STATIC RESUME DATA FOR THE LABELS*/

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React.js", ratingPercentage: 75 },
    { skill: "Node.js", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Rest APIs", ratingPercentage: 60 },
    { skill: "SQL", ratingPercentage: 50 },
    { skill: "Teamwork", ratingPercentage: 90 },
    { skill: "Problem Solving", ratingPercentage: 85 },
    { skill: "Agile Methodologies", ratingPercentage: 80 },
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

    /* WORK EXPERIENCE */

    <div className='resume-screen-container' key='work-experience'>
      <div className='experience-container'>
        <ResumeHeading
          heading={"Code Your Future, Manchester"}
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
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>

    ,
    /* PROJECTS */

    <div className='resume-screen-container' key='projects'>
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subheading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,
    <div className='resume-screen-container' key='interests'>
      <ResumeHeading
        heading='Cinema'
        description="I've always been a big movie buff and I write critic about movies in my Instagram and LetterBoxd"
      />
      <ResumeHeading
        heading='Football'
        description='I passionately follow the football from the time I can remember, I am a Manchester United fan, So Glory Glory Man United!'
      />
      <ResumeHeading
        heading='Gaming'
        description='I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.'
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt='B'
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className='resume-details-carousal'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};