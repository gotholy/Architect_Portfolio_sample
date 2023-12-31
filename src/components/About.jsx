import ButtonLight from "./ButtonLight";
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="aboutWrapper">
      <div className="aboutImgContainer">
        <div className="imgGroup">
          <img src="/img/About1.png" alt="" className="aboutImg1" />
          <img src="/img/About2.png" alt="" className="aboutImg2" />
        </div>
        <img src="/img/About3.png" alt="" className="aboutImg3" />
      </div>
      <article className="aboutArticle">
        <h2>About</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <ButtonLight text="read more" />
      </article>
    </section>
  );
};

export default About;
