import React from "react";
import "./contact.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <div className="contact" id="contact">
      <h1> Contact Me</h1>
      <h2> Feel free to get in touch and contact me through these socials.</h2>
      <div className="contact-container">
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: 10,
            width: 250,
            height: 250,
            padding: 40,
            margin: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="https://www.linkedin.com/in/mohamed-abdi-b69428225/">
            {" "}
            <AiFillLinkedin
              size={90}
              color="black"
              className="tech-stack-icons"
            />
          </a>
          <h3> Connect with me!</h3>
        </div>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: 10,
            width: 250,
            height: 250,
            padding: 40,
            margin: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="https://github.com/Mohamed1104">
            {" "}
            <AiFillGithub
              size={90}
              color="black"
              className="tech-stack-icons"
            />
          </a>
          <h3> See more projects</h3>
        </div>
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            borderRadius: 10,
            width: 250,
            height: 250,
            padding: 40,
            margin: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="mailto:mohamed.abdi11@hotmail.co.uk">
            {" "}
            <AiOutlineMail
              size={90}
              color="black"
              className="tech-stack-icons"
            />
          </a>
          <h3>Send me an email!</h3>
        </div>
      </div>
    </div>
  );
}

export default Contact;
