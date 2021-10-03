import { faGraduationCap, faPeopleCarry, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../styles/about.scss';


const About = () => {
    
    return (
        <div id="about" className="row d-flex justify-content-evenly p-5 bg-about">
            
            <div className="col d-flex flex-column align-items-center wow animate__slideInLeft" data-wow-duration="1.5s">
                <h2 className="title-about mb-5">Acerca de mi:</h2>
                
                <div className="d-flex flex-column flex-xl-row align-items-center justify-content-center">
                    <div className="me-3 mb-3 mb-lg-2">
                        <img src="./assets/images/img001.jpg" className="img-photo" alt="..." />
                    </div>
                    <div className="about-me-text-container">
                        <p className="txt-about">Mi nombre es <b>Jesús Alexander Castilla Atuncar.</b> </p>
                        <p className="txt-about">Vivo en Chincha - Ica, Peru.</p>
                        <p className="txt-about">Tengo 21 años</p>
                        <p className="txt-about">Actualmente curso el 9no Ciclo de la carrera de Ingeniería de Sistemas</p>
                        <p className="txt-about">Me dedico al desarrollo de aplicaciones web como Fullstack Developer.</p>
                        <p className="txt-about">Soy autodidacta, me gusta aprender cada día algo nuevo y </p>
                        <p className="txt-about">estar al tanto de las nuevas técnologías en el mundo del desarrollo.</p>
                    </div>
                </div>
                
                <a href='./assets/files/cv_actualizado_compressed.pdf' target='_blank' className="btn btn-primary btn-lg mt-4 mb-4 mb-md-0 btn-custom">Descargar CV</a>
            </div>
            
            <div className="col d-flex flex-column align-items-center wow animate__slideInRight" data-wow-duration="1.5s">
                <h2 className="title-about mb-4">Mis cualidades:</h2>
                
                <div className="container p-2">
                    <div className="row justify-content-center">
                        <div className="col hability-container p-4">
                            <FontAwesomeIcon icon={faUsers} size="3x" color="#002642" />
                            <p className="txt-habilities">Trabajo en equipo</p>
                        </div>
                        <div className="col hability-container p-4">
                            <FontAwesomeIcon icon={faGraduationCap} size="3x" color="#002642" />
                            <p className="txt-habilities">Ganas de aprender</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col hability-container p-4">
                            <FontAwesomeIcon icon={faPeopleCarry} size="3x" color="#002642"/>
                            <p className="txt-habilities">Capacidad de Liderazgo</p>
                        </div>
                        <div className="col hability-container p-4">
                            <FontAwesomeIcon icon={faTasks} size="3x" color="#002642"/>
                            <p className="txt-habilities">Ser Proactivo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
