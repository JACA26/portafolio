import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/projects.scss';


const Projects = () => {
    return (
        <div id="projects" className="projects-section">
            
            <div className="waveCustom">
                <img src="./assets/images/wave.svg" className="img-fluid" alt="..."/>
            </div>
            
            <div className="container p-4">
                
                <h1 className="title-section mb-4">Proyectos</h1>
                
                <div className="row mb-md-3">
                    <div className="col-12 col-md-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/no-image.jpg" alt='img' className="img-fluid img-project"/>
                            <figcaption className="hover-details">
                                <h3>Proyecto 1</h3>
                                <p>Descripción del proyecto</p>
                                <div className="d-flex justify-content-evenly">
                                    <div>
                                        <FontAwesomeIcon icon={faGithub} color="#000"/>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faLink} color="#000"/>
                                    </div>
                                    
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-md-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/no-image.jpg" alt='img' className="img-fluid img-project"/>
                            <figcaption className="img-hover">
                                proyecto 1
                            </figcaption>
                        </figure>
                    </div>
                    
                    <div className="col-12 col-md-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/no-image.jpg" alt='img' className="img-fluid img-project"/>
                            <figcaption className="img-hover">
                                proyecto 1
                            </figcaption>
                        </figure>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 col-md-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/no-image.jpg" alt='img' className="img-fluid img-project"/>
                            <figcaption className="img-hover">
                                proyecto 1
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-md-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/no-image.jpg" alt='img' className="img-fluid img-project"/>
                            <figcaption className="img-hover">
                                proyecto 1
                            </figcaption>
                        </figure>
                    </div>
                    
                    <div className="col-12 col-md-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/no-image.jpg" alt='img' className="img-fluid img-project"/>
                            <figcaption className="img-hover">
                                proyecto 1
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
