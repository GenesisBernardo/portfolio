import React, { useEffect, useState } from 'react';
import '../styles/headerStyle.css';
import {useSpring, animated} from 'react-spring';
import Navigation from './Navigation';
import Moon from '../styles/moon.png';
import Stars from '../styles/stars.png';
import Trees from '../styles/pine-tree-set.png';


const Header = () => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const paragraph = useSpring({opacity: 1, delay: 2000, from: {opacity: 0}})
    const paragraphh = useSpring({opacity: 1, delay: 2100, from: {opacity: 0}})
    const paragraphhh = useSpring({opacity: 1, delay: 2200, from: {opacity: 0}})
    const paragraphhhh = useSpring({opacity: 1, delay: 2300, from: {opacity: 0}})
    const star = useSpring({opacity: 1, delay: 1000, from: {opacity: 0}})
    const trees = useSpring({opacity: 1, delay: 1100, from: {opacity: 0}})
    const moon = useSpring({marginTop: 0, delay: 2400, from: {marginTop: -1000}})

    return (
        <div className="header">
            <Navigation/>
                <div className="container">
                <div className="row">
                    <div className="column-header header-section" style={{transform: `translateY(${ offsetY * 0.9}px)` }}>
                    <animated.div className="header-p1" style={paragraph}>
                        <p>Hi, my name is</p>
                    </animated.div> 
                    <br></br>
                    <animated.div className="header-h1" style={paragraphh}>
                        <h1>Genesis Bernardo.</h1>
                    </animated.div>
                    <animated.div className="header-h1" style={paragraphhh}>
                        <h1>I am a full stack web developer.</h1>
                    </animated.div>
                    <br></br>
                    <animated.div className="header-p2" style={paragraphhhh}>
                    <p>-Welcome to my portfolio</p>
                    </animated.div>
                    </div>
                    <animated.div className="column-image cont-moon" style={{...moon, ...{transform: `translateX(${ offsetY * 2}px)` }}}>
                    <animated.img src={Moon} className="moon" alt="Moon"/>
                    </animated.div>
                    </div>
                </div>
                <div className="background">
                    <animated.img src={Stars} alt="Stars" style={{...star, ...{transform: `translateX(-${ offsetY * 0.5}px)` }}}/> 
                    <animated.img src={Trees} className="tree" alt="Trees" style={trees}/>
                </div>
        </div>
    );
};

export default Header;