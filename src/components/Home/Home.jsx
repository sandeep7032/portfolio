import React from "react";
import "./Home.css";
import Multiple from "../MultipleText/Multiple";
import Social from "../SocialMedia/Social";

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h3>Hello it's me</h3>
        <h1>Sandeep</h1>
        <Multiple />
        <p>
          I am a Frontend React JS Developer. I have expertise in JavaScript,
          React.js, and diverse technical stacks, delivering seamless user
          experiences through captivating web applications.
        </p>
        <Social />
      </div>

      <div className="home-img">
        <img
          src="https://i.pinimg.com/1200x/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
          alt="pic"
        />
      </div>
    </div>
  );
};

export default Home;
