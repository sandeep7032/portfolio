import React from "react";
import { Link } from "react-router-dom";
import "./Social.css";
import {
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoFacebook,
} from "react-icons/bi";

const Social = () => {
  return (
    <div className="social-media">
      <Link
        to="https://www.facebook.com/profile.php?id=100011399910905"
        target="_blank"
      >
        <BiLogoFacebook className="social-icons" />
      </Link>
      <Link to="https://www.linkedin.com/in/sandeep-chitigori/" target="_blank">
        <BiLogoLinkedinSquare className="social-icons" />
      </Link>
      <Link to="https://github.com/sandeep7032" target="_blank">
        <BiLogoGithub className="social-icons" />
      </Link>
      <Link to="https://www.instagram.com/sandeep_kumar_77/" target="_blank">
        <BiLogoInstagram className="social-icons" />
      </Link>
      <div className="btn-div">
        <Link
          to="https://drive.google.com/file/d/1RebbpZwwYqiRA36ZzaB8r74SOO8l7r8A/view?usp=sharing"
          target="_blank"
        >
          <button className="btn">Resume</button>
        </Link>
      </div>
    </div>
  );
};

export default Social;
