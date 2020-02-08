import React, { Component } from "react";
import LogoShadow from "../assets/img/AM-logo-shadow.svg";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="home-shadow">
            <div>
            <img src={LogoShadow} alt="logo" />
            </div>

            <div className="home-title">
              <p>ANGGI MAULINDA</p>
            </div>
            <div className="home-title">
              <p>Front-end Developer, Graphic Designer</p>
            </div>

            <div className="home-link">
              <a
                href="https://github.com/aimanggi"
                rel="noopener noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                href="https://lovenest.com.sg"
                rel="noopener noreferrer"
                target="_blank"
              >
                Latest Portfolio
              </a>
              <a
                href="https://monggovestapp.herokuapp.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Project Portfolio
              </a>
            </div>
            <div className="home-more">More content in progress.</div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
