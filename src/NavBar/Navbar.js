import React from 'react';
import './navbar.css';
import logo from "../images/logo.png"
import About from "../About";
import {AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import Home from "../Home";
import Projects from "../Projects";
import Contact from "../Contact";

function Navbar() {
    const linkedin = <AiFillLinkedin/>;
    const git = <AiFillGithub/>
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="">
                        <img className="logo-img" src={logo}/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#About">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Contact">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/pranathi-alluri/">
                                    {linkedin}
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://github.com/pranathi-alluri">
                                    {git}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div data-bs-spy="scroll" data-bs-target="#navbarexample2" data-bs-offset="0"
                 className="scrollspy-example" tabIndex="0">
                <Home/>
                <div id="About">
                    <About/>
                </div>
                <div id="Projects">
                    <Projects/>
                </div>
                <div id="Contact">
                    <Contact/>
                </div>

            </div>
        </div>
    );
}

export default Navbar;