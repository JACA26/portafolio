import React, { useEffect, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';
import '../styles/navbar.scss';


const NavBar = () => {
    
    const [toogleNav, setToogleNav] = useState(false);
    
    const changeValueNav = () => {
        setToogleNav(!toogleNav);
    }
    
    useEffect(() => {
        
        const toogleColorNav = () => {
            if(toogleNav){
                document.querySelector('.nav-custom').classList.add('nav-toggler');
            }else{
                document.querySelector('.nav-custom').classList.remove('nav-toggler');
            }
        }
        
        toogleColorNav();
        
    }, [toogleNav]);
    
    
    
    return (
        <>
            <nav className="navbar navbar-expand-md nav-custom animate__animated animate__fadeInDown">
                <div className="container-fluid">
                    
                    <div className="navbar-brand">
                        <img src="./assets/images/logo2.png" alt="About 1" className="img-logo img-fluid" />
                    </div>
                    
                    <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onClick={changeValueNav}>
                        <FontAwesomeIcon icon={faBars} color="#fff" />
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <div className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
                                
                                <li className="nav-item">
                                    <Link className="nav-link" to="about"> 
                                        Acerca de
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link"> 
                                        Habilidades
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link"> 
                                        Proyectos
                                    </Link>
                                </li>
                                
                                <li className="nav-item">
                                    <Link className="nav-link"> 
                                        Contacto
                                    </Link>
                                </li>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar