import React from "react";
import "./about.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiFirebase,
  SiCypress,
  SiJest,
  SiExpress,
} from "react-icons/si";

function About() {
  return (
    <div className="About" id="about">
      <h1> About Me</h1>
      <div className="bio">
        <div className="intro">
          <div className="brief-intro">
            <p>
              Recently completed an intensive 16 week bootcamp. The opportunity
              to work with new people on a weekly basis has greatly enhanced my
              pair programming skills and has helped me become more
              team-oriented. It has allowed me to learn from a diverse group of
              individuals and adapt to different communication and
              problem-solving styles, which has ultimately made me a more
              effective contributor to group projects. I am now a full stack
              developer, that really enjoys building web applications, proficent
              in both the front and back-end.
            </p>
          </div>
          <div className="hobbies">
            <h2> Hobbies & Interests </h2>
            <div className="hobbies-img">
              <img
                src="https://cdn-icons-png.flaticon.com/128/141/141073.png"
                alt="controller"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/512/867/867329.png"
                alt="football"
              />
              <img
                src="https://img.icons8.com/color/512/naruto.png"
                alt="anime"
              />
              <img
                src="https://cdn-icons-png.flaticon.com/128/4221/4221484.png"
                alt="movies"
              />
            </div>
            <div className="hobbies-desc">
              <h3>Gaming</h3>
              <h3>Football</h3>
              <h3>Anime</h3>
              <h3>Movies</h3>
            </div>
          </div>
        </div>
        <div className="tech-stack">
          <h2> Tech Stack </h2>
          <div className="stack">
            <AiFillHtml5 size={40} className="tech-stack-icons" />
            <FaCss3Alt size={40} className="tech-stack-icons" />
            <SiJavascript size={40} className="tech-stack-icons" />
            <FaReact size={40} className="tech-stack-icons" />
            <SiTypescript size={40} className="tech-stack-icons" />
            <FaNodeJs size={40} className="tech-stack-icons" />
            <SiExpress size={40} className="tech-stack-icons" />
            <SiPostgresql size={40} className="tech-stack-icons" />
            <FaPython size={40} className="tech-stack-icons" />
            <SiFirebase size={40} className="tech-stack-icons" />
            <SiJest size={40} className="tech-stack-icons" />
            <SiCypress size={40} className="tech-stack-icons" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
