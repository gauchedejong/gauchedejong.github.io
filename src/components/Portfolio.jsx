import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
        <div className="container">
            <div className="row">
                <div className="col-12 col-xs-12">
                    <h5 className="title">Portfolio</h5>
                </div>
                <div className="col-6 col-xs-12">
                    <div className="image">
                        <img className="portfolio-image" src="img/moviesrating.PNG" alt="Movies Rating" />
                    </div>
                    <div className="portfolio-caption">
                        <h1 className="portfolio-name">Movies Rating</h1>
                        <p className="programming-language">Laravel 8 & Mysql/MariaDB</p>
                        <a className="portfolio-link" href="https://github.com/hastabudiawan/movie-rating.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>
                </div>
                <div className="col-6 col-xs-12">
                    <div className="image">
                        <img className="portfolio-image" src="img/todolist.PNG" alt="To Do List" />
                    </div>
                    <div className="portfolio-caption">
                        <h1 className="portfolio-name">To Do List</h1>
                        <p className="programming-language">Laravel 8, Mysql/MariaDB, and Vuejs</p>
                        <a className="portfolio-link" href="https://github.com/hastabudiawan/todolist.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>
                </div>
                <div className="col-6 col-xs-12">
                    <div className="image">
                        <img className="portfolio-image" src="img/ci3.png" alt="Crud Codeigniter 3"/>
                    </div>
                    <div className="portfolio-caption">
                        <h1 className="portfolio-name">Crud Codeigniter 3</h1>
                        <p className="programming-language">Codeigniter 3, MySql/MariaDB, and Ajax</p>
                        <a className="portfolio-link" href="https://github.com/hastabudiawan/crud_ci_ajax.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>
                </div>
                <div className="col-6 col-xs-12">
                    <div className="image">
                        <img className="portfolio-image" src="img/tictactoe.PNG" alt="Tic Tac Toe" />
                    </div>
                    <div className="portfolio-caption">
                        <h1 className="portfolio-name">Tic Tac Toe</h1>
                        <p className="programming-language">Reactjs</p>
                        <a className="portfolio-link" href="https://github.com/hastabudiawan/Tic-Tac-Toe-ReactJS.git" target="_blank" rel="noopener noreferrer">Github Repository</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Portfolio;