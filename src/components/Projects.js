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
                
                <div className="row mb-md-3 wow animate__fadeInLeft" data-wow-duration="1.5s">
                    <div className="col-12 col-md-12 col-lg-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/projects/gif-search.png" alt='img' className="img-fluid img-project"/>
                            <figcaption className="hover-details">
                                <h3>GifApp</h3>
                                <p>Buscador de gif's com Gipgy API</p>
                                <div className="circles-button-container">
                                    
                                    <a 
                                        href="https://github.com/JACA26/GifApp" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver repo en github"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faGithub} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://friendly-curran-56432b.netlify.app/" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver demo"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faLink} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/projects/notesApp.png" alt='img' className="img-fluid img-project"/>
                            <figcaption className="hover-details">
                                <h3>Aplicación de Notas con React</h3>
                                <p>App de notas con redux, subida de imágenes y login con google</p>
                                <div className="circles-button-container">
                                    
                                    <a 
                                        href="https://github.com/JACA26/react-notes" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver repo en github"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faGithub} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://kind-hypatia-8ce5dc.netlify.app/" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver demo"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faLink} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    
                    <div className="col-12 col-md-12 col-lg-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/projects/project-cotizador.png" alt='img' className="img-fluid img-project"/>
                            <figcaption className="hover-details">
                                <h3>Cotizador de préstamos</h3>
                                <p>Cotizador hecho con react y hooks</p>
                                <div className="circles-button-container">
                                    
                                    <a 
                                        href="https://github.com/JACA26" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver repo en github"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faGithub} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://romantic-ardinghelli-c74779.netlify.app/" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver demo"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faLink} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                
                <div className="row wow animate__fadeInRight" data-wow-duration="1.5s">
                    <div className="col-12 col-md-12 col-lg-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/projects/project-tickets.png" alt='img' className="img-fluid img-project"/>
                            <figcaption className="hover-details">
                                <h3>App de tickets a tiempo real</h3>
                                <p>Simulador de ticketera de atención con websockets</p>
                                <div className="circles-button-container">
                                    
                                    <a 
                                        href="https://github.com/JACA26/proyect-tickets" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver repo en github"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faGithub} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://proyect-tickets.herokuapp.com/" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver demo"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faLink} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/projects/project1.png" alt='img' className="img-fluid img-project"/>
                            <figcaption className="hover-details">
                                <h3>Agencia de Viajes</h3>
                                <p>Página de una agencia de viajes con react y mysql</p>
                                <div className="circles-button-container">
                                    
                                    <a 
                                        href="https://github.com/JACA26/agenciadeviajesProject" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver repo en github"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faGithub} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://pure-tundra-26054.herokuapp.com/" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver demo"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faLink} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    
                    <div className="col-12 col-md-12 col-lg-4">
                        <figure className="imghvr-zoom-out hover-container">
                            <img src="./assets/images/projects/socketChat.png" alt='img' className="img-fluid img-project"/>
                            <figcaption className="hover-details">
                                <h3>Chat App</h3>
                                <p>Chat en tiempo real con websockets y socket.io</p>
                                <div className="circles-button-container">
                                    
                                    <a 
                                        href="https://github.com/JACA26/socket-chat" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver repo en github"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faGithub} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                    <a 
                                        href="https://chatapp-jaca.herokuapp.com/" 
                                        target="_blank" rel="noreferrer"
                                        data-bs-toggle="tooltip" 
                                        data-bs-placement="bottom" 
                                        title="Ver demo"
                                    >
                                        <div className="circle-icon">
                                            <FontAwesomeIcon icon={faLink} color="#000" size="lg"/>
                                        </div>
                                    </a>
                                    
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
