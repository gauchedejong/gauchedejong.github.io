import React from "react";

function About() {
    return (
      <div className="about">
        <div className="container">
            <div className="row">
                <div className="col-12 col-xs-12">
                    <h1 className="title">About</h1>
                    <p className="desc-txt">My name is Hasta Budiawan (he/him). My hometown is Tangerang, where I was born and reared. I began learning HTML, CSS, and Javascript in 2014, which marked the beginning of my programming career. My major programming languages are PHP and Javascript, though I also use Laravel, Codeigniter, and Reactjs as libraries and frameworks.</p>
                </div>
                <div className="col-12 col-xs-12">
                    <h1 className="title">Technologies I Use</h1>                    
                    <h1 className="sub-title">Frontend</h1>
                    <p className="desc-txt">HTML5 & CSS3, Javascript, Bootstrap, Reactjs, Restfull API</p>                    
                    <h1 className="sub-title">Backend</h1>
                    <p className="desc-txt">PHP, Laravel, Codeigniter</p>                    
                    <h1 className="sub-title">Database</h1>
                    <p className="desc-txt">Mysql/MariaDB</p>                    
                    <h1 className="sub-title">Version Control System</h1>
                    <p className="desc-txt">GIT</p>                    
                </div>
                <div className="col-12 col-xs-12">
                    <h1 className="title">Education</h1>
                    <p className="desc-txt">2016 - 2020</p>
                    <p className="desc-txt">Buddhi Dharma University</p>
                    <p className="desc-txt">Bachelor's Degree in Computer Science</p>
                </div>
                <div className="col-12 col-xs-12">
                    <h1 className="title">Contact</h1>
                    <a className="email-link desc-txt" href="mailto:hastabudiawan7@gmail.com" rel="noopener noreferrer">hastabudiawan7@gmail.com</a>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default About;