import ButtonDark from "./ButtonDark";
import React from "react";
import "./Project.css";

const Projects = () => {
  return (
    <>
      <section className="ourProjectsGallery">
        <h2>Our Projects</h2>
        <div className="container1">
          <img src="/img/SampleProject.png" alt="" className="item1" />
          <img src="/img/Project1.png" alt="" className="item2" />
        </div>
        <div className="container2">
          <img src="/img/Project2.png" alt="" className="item3" />
          <img src="/img/Project3.png" alt="" className="item4" />
          <img src="/img/Project4.png" alt="" className="item5" />
        </div>
        <ButtonDark text="ALL PROJECTS" />
      </section>
    </>
  );
};

export default Projects;
