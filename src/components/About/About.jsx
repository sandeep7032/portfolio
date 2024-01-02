import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-div">
      <h1 className="about">About Me</h1>
      <h3 className="first">
        My name is Sandeep. I have completed the React.js course from Geekster.
        During the course, I worked on numerous projects assigned by Geekster
        and scored more than 85% on each assignment. I am familiar with HTML,
        CSS, JavaScript, React, Redux, Chakra UI, React Routing, Axios and other
        related technologies. I have a strong proficiency in these skills and I
        am enthusiastic about pursuing a career as a Frontend Developer in the
        software field.
      </h3>

      <h3 className="second">
        As for my strengths, I am a hard worker and good problem solver,
        However, like everyone, I have some weaknesses too. I sometimes tend to
        be overly critical of my work, striving for perfection, which may lead
        to spend extra time on my tasks.
      </h3>

      <h3 className="third">
        In the next five years, I aspire to become an expert in Full Stack
        Development. My goal is to contribute to innovative projects and take
        the lead in developing compelling user interfaces. Additionally, I look
        forward to mentoring junior developers and taking on more significant
        responsibilities within the organization.
      </h3>
    </div>
  );
};

export default About;
