import React from 'react'
import '../styles/header.scss';
import NavBar from './NavBar';


const Header = () => {
    
    
    return (
        
        <div className="container-2">
            <NavBar />
            
            <div className="d-flex align-items-center flex-column flex-xl-row justify-content-evenly w-100">
                
                {/* <div className="animate__animated animate__fadeInLeft">
                    <img src="./assets/images/svg-1.svg" className="img-me img-fluid" alt="..." />
                </div> */}
                
                <div className="container-presentation flex-sm-row p-2 animate__animated animate__fadeInDown">
                    <div className="d-flex flex-column justify-content-center ms-3 p-3">
                        <h2 className="txt-me">Hola!!</h2>
                        <h1 className="txt-me2">Soy Alexander, Web Developer</h1>
                        <h2 className="txt-me">Bienvenido a mi portafolio!</h2>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Header
