import React, { Component } from 'react';
import LogoShadow from '../assets/img/AM-logo-shadow.svg';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="container">
                    <div className="home-shadow">
                        <div>
                        <p>Graphic Designer,</p>
                        <p>Front-end Developer</p>
                        </div>

                        <img src={LogoShadow} alt="logo" />
                    </div>
                </div>

            </div>
        );
    }
}

export default Home;