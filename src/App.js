import React from "react";
// import { animateScroll as scroll } from 'react-scroll'
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import "animate.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
	
    /* useEffect(() => {
		
		window.onload = scroll.scrollToTop();
		
	}, []) */
	
    return (
        <>
            <Header />
            <About />
			<Skills />
            <Projects />
            <Contact />
        </>
    );
};

export default App;
