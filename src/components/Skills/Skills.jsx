import React from "react";
import "./Skills.css";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="skills-div">
      <h1>My Top Skills</h1>
      <div>
        <div className="first">
          <Link
            to="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
          >
            <img
              className="html"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-128.png"
              alt="html"
            />
          </Link>
          <Link
            to="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
          >
            <img
              className="css"
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-128.png"
              alt="css"
            />
          </Link>
          <Link
            to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
          >
            <img
              className="javascript"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              alt="html"
            />
          </Link>
        </div>

        <div className="second">
          <Link to="https://git-scm.com/" target="_blank">
            <img
              className="git"
              src="https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-128.png"
              alt="git"
            />
          </Link>
          <Link to="https://react.dev/" target="_blank">
            <img
              className="react"
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-128.png"
              alt="react"
            />
          </Link>
          <Link to="https://github.com/" target="_blank">
            <img
              className="github"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-128.png"
              alt="github"
            />
          </Link>
        </div>

        <div className="third">
          <Link to="https://getbootstrap.com/" target="_blank">
            <img
              className="bootstrap"
              src="https://www.logo.wine/a/logo/Bootstrap_(front-end_framework)/Bootstrap_(front-end_framework)-Logo.wine.svg"
              alt="bootstrap"
            />
          </Link>
          <Link to="https://tailwindcss.com/" target="_blank">
            <img
              className="tailwind"
              src="https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp"
              alt="tailwindcss"
            />
          </Link>
          <Link to="https://chakra-ui.com/" target="_blank">
            <img
              className="chakra"
              src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4"
              alt="chakra-ui"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;
