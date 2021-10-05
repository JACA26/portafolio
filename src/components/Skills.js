import { faBootstrap, faCss3Alt ,faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import '../styles/skills.scss';


const Skills = () => {
    return (
        <div id="skills" className="skill-secction">
            <div className="waveCustom">
                <img src="./assets/images/wave.svg" className="img-fluid" alt="..."/>
            </div>
            
            <div className="container p-4">
                
                <h1 className="title-section mb-5">Habilidades</h1>
                
                <div id="carouselExampleCaptions" className="carousel carousel-dark slide p-5" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2">
                                        <FontAwesomeIcon icon={faReact} size="5x" color="#002642" />
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>React JS</h5>
                                    </div>
                                </div>
                                
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2">
                                        <FontAwesomeIcon icon={faReact} size="5x" color="#61DBFB" />
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>React Native</h5>
                                    </div>
                                </div>
                                
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2">
                                        <FontAwesomeIcon icon={faJsSquare} size="5x" color="#F0DB4F" />
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>JavaScript</h5>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2">
                                        <FontAwesomeIcon icon={faCss3Alt} size="5x" color="#2965f1" />
                                    </div>
                                    <div className ="d-block icon-description">
                                        {/* d-none d-md-block  */}
                                        <h5>CSS3</h5>
                                    </div>
                                </div>
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2">
                                        <FontAwesomeIcon icon={faBootstrap} size="5x" color="#563d7c" />
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>Bootstrap</h5>
                                    </div>
                                </div>
                                
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2">
                                        <FontAwesomeIcon icon={faHtml5} size="5x" color="#E34C26" />
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>HTML5</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2">
                                        <FontAwesomeIcon icon={faNodeJs} size="5x" color="#68A063" />
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>Node JS</h5>
                                    </div>
                                </div>
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2 text-center">
                                        <img src="./assets/images/redux.png" alt="Jquery" className="img-carrousel"/>
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>Redux</h5>
                                    </div>
                                </div>
                                
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2 text-center">
                                        <img src="./assets/images/jquery.png" alt="Jquery" className="img-carrousel"/>
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>JQuery</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col d-flex flex-column justify-content-center align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2 text-center mb-4">
                                        <img src="./assets/images/sql-server.png" alt="Jquery" className="img-carrousel"/>
                                    </div>
                                    <div className ="d-none d-md-block icon-description">
                                        <h5>SQL Server</h5>
                                    </div>
                                </div>
                                
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2 text-center">
                                        <img src="./assets/images/mysql.png" alt="Jquery" className="img-carrousel"/>
                                    </div>
                                    <div className ="d-none d-md-block icon-description">
                                        <h5>MySQL</h5>
                                    </div>
                                </div>
                                
                                <div className="col d-flex flex-column align-items-center animate__animated animate__pulse animate__infinite">
                                    <div className="p-4 fs-2">
                                        <FontAwesomeIcon icon={faGitAlt} size="5x" color="#f34f29" />
                                    </div>
                                    <div className ="d-block icon-description">
                                        <h5>Git</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Skills
