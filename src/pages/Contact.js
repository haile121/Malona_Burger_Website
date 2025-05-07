import React from "react";
import BurgerLeft from "../assets/backGforBurWeb.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BurgerLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Get in Touch</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />

          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter Message..."
            name="message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
