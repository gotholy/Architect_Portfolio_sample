import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footerSection">
      <img src="/img/FooterLogo.png" alt="" className="footerLogo" />
      <article>
        <h5>Information</h5>
        <nav className="footerNav">
          <NavLink to="/">Main</NavLink>
          <NavLink to="/Galler">Gallery</NavLink>
          <NavLink to="/Projects">Projects</NavLink>
          <NavLink to="/Certification">Certification</NavLink>
          <NavLink to="/Contacts">Contacts</NavLink>
        </nav>
      </article>
      <article className="footerContacts">
        <h5>Contacts</h5>
        <div>
          <img src="/img/Location.svg" alt="" />
          <p>1234 Sample Street Austin Texas 78704</p>
        </div>
        <div>
          <img src="/img/Phone.svg" alt="" />
          <p>512.333.2222</p>
        </div>
        <div>
          <img src="/img/Mail.svg" alt="" />
          <p>sampleemail@gmail.com</p>
        </div>
      </article>
      <article>
        <h5>Social Media</h5>
        <div className="socialMediaIconContainer">
          <img src="/img/facebook.png" alt="" />
          <img src="/img/twitter.png" alt="" />
          <img src="/img/LinkedIn.png" alt="" />
          <img src="/img/pininterest.png" alt="" />
        </div>
      </article>
    </section>
  );
};

export default Footer;
