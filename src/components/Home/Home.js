import React from "react";
import Me from "../../assets/images/picture.jpg";
import "./home.css";
import TypeIt from "typeit-react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import cv from "../../assets/V2CV (1).pdf";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
function Home() {
  const CVTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      CV
    </Tooltip>
  );

  const LinkedIntooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      LinkedIn
    </Tooltip>
  );
  const Githubtooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Github
    </Tooltip>
  );
  const Twittertooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Twitter
    </Tooltip>
  );

  return (
    <div className="home" id="home">
      <div className="profile-img">
        <img src={Me} alt="me" />
      </div>
      <div className="home-intro">
        <h1> Hi 👋, my name is Mohamed Abdi</h1>
        <h2> 🇬🇧 Based in London, England</h2>
        <h2>
          {" "}
          💻{" "}
          <TypeIt
            options={{ loop: true }}
            getBeforeInit={(instance) => {
              instance
                .type("Full Stack Developer")
                .pause(750)
                .delete(20)
                .pause(500)
                .type("Front End")
                .pause(750)
                .delete(20)
                .pause(500)
                .type("Back End")
                .pause(750)
                .delete(20)
                .pause(500)
                .type("Team Worker")
                .pause(750)
                .delete(20)
                .pause(500)
                .type("Creative");

              // Remember to return it!
              return instance;
            }}
          />
        </h2>
        <h2> 📧 mohamed.abdi11@hotmail.co.uk </h2>
        <div className="media-icons">
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={CVTooltip}
          >
            <a href={cv}>
              {" "}
              <FaUserCircle
                size={40}
                color="black"
                className="tech-stack-icons"
              />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={Githubtooltip}
          >
            <a href="https://github.com/Mohamed1104">
              {" "}
              <AiFillGithub
                size={40}
                color="black"
                className="tech-stack-icons"
              />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={LinkedIntooltip}
          >
            <a href="https://www.linkedin.com/in/mohamed-abdi-b69428225/">
              {" "}
              <AiFillLinkedin
                size={40}
                color="black"
                className="tech-stack-icons"
              />
            </a>
          </OverlayTrigger>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={Twittertooltip}
          >
            <a href="https://twitter.com/MoC0des">
              {" "}
              <AiFillTwitterCircle
                size={40}
                color="black"
                className="tech-stack-icons"
              />
            </a>
          </OverlayTrigger>
        </div>
      </div>
    </div>
  );
}

export default Home;
