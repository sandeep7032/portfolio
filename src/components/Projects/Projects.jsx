import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import weather from "./../../assets/weather.png";
import github from "./../../assets/github.png";
import randomUser from "./../../assets/randomUser.png";
import profileCard from "./../../assets/profileCard.png";
import stopWatch from "./../../assets/stopWatch.png";
import addToCart from "./../../assets/addToCart.png";
import calculator from "./../../assets/calculator.png";
import portfolio from "./../../assets/portfolio.png";
import todo from "./../../assets/todo.png";

const Projects = () => {
  return (
    <div className="projects-div">
      <h1>Projects</h1>
      <div className="projects">
        <div className="project left">
          <img src={weather} alt="project" />
          <div>
            <h2>Weather App</h2>
            <p>It provides weather information of major cities.</p>
            <Link
              to="https://delicate-rugelach-3a58eb.netlify.app/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/React_Weather"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="project middle">
          <img src={github} alt="project" />
          <div>
            <h2>Github Details</h2>
            <p>It provides details of github user accounts.</p>
            <Link
              to="https://courageous-rolypoly-66a7df.netlify.app/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/React_Github-Clone"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="project right">
          <img src={randomUser} alt="project" />
          <div>
            <h2>Random User</h2>
            <p>It generates random user details from the internet.</p>
            <Link
              to="https://fantastic-frangollo-9ac70f.netlify.app/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/RandomUser"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="project left">
          <img src={profileCard} alt="project" />
          <div>
            <h2>Profile Card</h2>
            <p>Profile card with dark and light theme.</p>
            <Link
              to="https://idyllic-druid-c24377.netlify.app/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/React-ProfileCard"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="project middle">
          <img src={stopWatch} alt="project" />
          <div>
            <h2>Stop Watch</h2>
            <p>A real time stop watch app.</p>
            <p></p>
            <Link
              to="https://resilient-haupia-40ba1f.netlify.app/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/React_Stop-Watch"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="project right">
          <img src={addToCart} alt="project" />
          <div>
            <h2>Add to Cart</h2>
            <p>It adds the products into the cart.</p>
            <Link
              to="https://add-to-cart-sandeep7032.vercel.app/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/React_Add-to-Cart"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="project left">
          <img src={calculator} alt="project" />
          <div>
            <h2>Calculator App</h2>
            <p>Calculator with simple calculations possible.</p>
            <Link
              to="https://sandeep7032.github.io/Web-Projects/Calculator/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/Web-Projects/tree/main/Calculator"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="project middle">
          <img src={portfolio} alt="project" />
          <div>
            <h2>Portfolio UI</h2>
            <p>It represents the user interface of portfolio.</p>
            <Link
              to="https://sandeep7032.github.io/Web-Projects/Portfolio-UI/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/Web-Projects/tree/main/Portfolio-UI"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
        <div className="project right">
          <img src={todo} alt="project" />
          <div>
            <h2>To-Do App</h2>
            <p>A To-Do App for day to day tasks.</p>
            <Link
              to="https://sandeep7032.github.io/Web-Projects/To-Do/"
              target="_blank"
            >
              View
            </Link>
            <Link
              to="https://github.com/sandeep7032/Web-Projects/tree/main/To-Do"
              target="_blank"
            >
              Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
