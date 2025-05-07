import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to="https://www.instagram.com/" target="_blank">
          <InstagramIcon />
        </Link>
        <Link to="https://x.com/" target="_blank">
          <TwitterIcon />
        </Link>
        <Link to="https://web.facebook.com/" target="_blank">
          <FacebookIcon />
        </Link>
        <Link to="https://www.linkedin.com/" target="_blank">
          <LinkedInIcon />
        </Link>
      </div>

      <div className="second">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="third">
        <p>&copy; 2025 MalonaBurger.com </p>
        <Link to="https://t.me/Mati_12021/" target="_blank">
          <p> ♦ say Hi the Developer</p>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
