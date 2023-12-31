import ButtonLight from "./ButtonLight";
import React from "react";
import "./ProjectLorum.css";

const ProjectLorum = () => {
  return (
    <section className="lorumWrapper">
      <h2>
        PROJECT <span>Lorum</span>
      </h2>
      <div className="lorumImg">
        <ButtonLight text="view project" />
      </div>
    </section>
  );
};

export default ProjectLorum;
