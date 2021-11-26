import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="header">
        <nav className="navbar d-flex nav-container">
            <div className="logo">Hasta</div>
            <div className="nav-list">
                <ul className="nav-links d-flex">
                    <Link className="link-menu" to="/">
                        <li className="nav-items">
                            <i className="icon fa fa-home"></i>
                            <span className="nav-name">Home</span>               
                        </li>
                    </Link>
                    <Link className="link-menu" to="/about">
                        <li className="nav-items">
                            <i className="icon fa fa-user"></i>
                            <span className="nav-name">About</span>              
                        </li>
                    </Link>                
                    <Link className="link-menu" to="/portfolio">
                        <li className="nav-items">
                            <i className="icon fa fa-file-code-o"></i>
                            <span className="nav-name">Portfolio</span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="social-network">     
                <a className="social-network-link" href="https://github.com/hastabudiawan/" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
            </div>
        </nav>
    </header>
  );
}

export default Nav;