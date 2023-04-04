import React from "react";
import "./projects.css";
import Cards from "../../components/Card/card";
import data from "../../assets/info/data";

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="card-container">
        {data.map((project) => (
          <Cards
            title={project.name}
            img={project.image}
            desc={project.description}
            git={project.repo}
            live={project.url}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
