import React, { useEffect } from "react";
import Me from "../../assets/images/picture.jpg";
import "./home.css";
import TypeIt from "typeit-react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {
  CVTooltip,
  LinkedIntooltip,
  Githubtooltip,
  Twittertooltip,
} from "../../components/Tooltips/homeTooltips";
import cv from "../../assets/CVV3.pdf";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Home() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  useEffect(() => {
    const controls = animate(count, 22, { duration: 6 });

    return controls.stop;
  }, []);

  return (
    <div className="home" id="home">
      <motion.div
        className="profile-img"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
      >
        <img src={Me} alt="me" />
      </motion.div>
      <motion.div
        className="home-intro"
        animate={{ x: 10 }}
        transition={{
          ease: "linear",
          duration: 2,
          x: { duration: 1 },
        }}
      >
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
        {/* <h2> 📧 mohamed.abdi11@hotmail.co.uk </h2> */}
        <div className="age">
          <h2>🇸🇴 I'm </h2>
          <motion.h2>{rounded}</motion.h2>
          <h2> years old</h2>
        </div>

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
      </motion.div>
    </div>
  );
}

export default Home;
