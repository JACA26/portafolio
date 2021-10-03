import React from "react";
// import { animateScroll as scroll } from 'react-scroll'
import About from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import "animate.css";

const App = () => {
	
    /* useEffect(() => {
		
		window.onload = scroll.scrollToTop();
		
	}, []) */
	
    return (
        <>
            <Header />
            <About />
			<Skills />
        </>
    );
};

export default App;
