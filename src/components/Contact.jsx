import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <h2 className="contactH">Contact Us</h2>
      <section className="contactUsSection">
        <form action="ziel.php">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-Mail:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="interest">Interested In:</label>
            <input type="text" id="interest" name="interest" required></input>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
        </form>
        <img src="/img/Contact.png" alt="" />
      </section>
    </>
  );
};

export default Contact;
