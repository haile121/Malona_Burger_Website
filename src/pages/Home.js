import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/backGforBurWeb.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Malona Burger</h1>
          <p> Made With ❤</p>
          <Link to="/menu">
            <button> ORDER NOW!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
