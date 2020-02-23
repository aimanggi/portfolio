import React, { Component } from "react";
import LogoShadow from "../assets/img/AM-logo-shadow.svg";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import codepen from "../assets/img/codepen.svg";
import instagram from "../assets/img/instagram.svg";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="home-shadow">
            <div>
              Hello, I'm
            </div>
            <div className="home-title__name">
              <p>ANGGI MAULINDA</p>
            </div>
            <div className="home-title__occupation">
              <div>Front-end Developer,</div>
              <div>Graphic Designer</div>
            </div>

            <div className="home-link">
              <a
                href="https://id.linkedin.com/in/anggi-maulinda"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin" />
              </a>
              <a
                href="https://github.com/aimanggi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://codepen.io/aimanggi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={codepen} alt="codepen" />
              </a>
              <a
                href="https://instagram.com/aimanggi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={instagram} alt="instagram" />
              </a>
              {/* <a
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
              </a>*/}
             </div> 
            <div className="home-more">More content in progress.</div> 
            <div className="d-flex justify-content-center">
            <img src={LogoShadow} alt="logo" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
