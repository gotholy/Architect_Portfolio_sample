import React from "react";
import "./MainFocus.css";

const MainFocus = () => {
  return (
    <>
      <h2 className="mainFocusH">Main Focus/Mission Statement</h2>
      <section className="mainFocusWrapper">
        <article className="mainFocusArticle">
          <p className="num">1</p>
          <p className="focusText1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </p>
        </article>
        <article className="mainFocusArticle">
          <p className="num">2</p>
          <p className="focusText2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat, magna mauris porttitor
            tortor, a auctor est felis ut nisl.
          </p>
        </article>
      </section>
    </>
  );
};

export default MainFocus;
