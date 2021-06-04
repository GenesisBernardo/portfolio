import React, { useState } from 'react';
import "../styles/navigationStyle.css";
import {useSpring, animated} from 'react-spring';
import Logo from '../styles/logo.png';
import {Link} from 'react-scroll';




const Navigation = () => {
    const [clicked, setClicked] = useState(false);
    const logo = useSpring({opacity: 1, delay: 1300, from: {opacity: 0}})
    const li = useSpring({marginTop: 0, delay: 1400, from: {marginTop: -500}})
    const lii = useSpring({marginTop: 0, delay: 1500, from: {marginTop: -500}})
    const liii = useSpring({marginTop: 0, delay: 1600, from: {marginTop: -500}})
    const liiii = useSpring({marginTop: 0, delay: 1700, from: {marginTop: -500}})

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleClickk = () => {
        setTimeout(() => {
            setClicked(!clicked);
        }, 1500)
    };  
 
    return (
        
       /* <div className="logo-nav">
            <animated.div className="logo" style={logo}>
                        <img onClick={() => window.location.reload()} src={Logo} width="60" height="60" alt="Logo" />
            </animated.div>
                <nav className="navigation">
                     <ul>
                        <animated.li style={li}>
                            <Link to="header" smooth={true} duration={1000}>Home</Link>
                        </animated.li>
                        <animated.li style={lii}>
                            <Link to="about" smooth={true} duration={1000}>About</Link>
                        </animated.li>
                        <animated.li style={liii}>Project</animated.li>
                        <animated.li style={liiii}>Contact</animated.li>
                    </ul>
                </nav>
    </div>*/ 
    <nav>
        <animated.div className="logo" style={logo}>
            <img onClick={() => window.location.reload()} src={Logo} width="60" height="60" alt="Logo" />
        </animated.div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={ clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "" : "close"}>
                        <animated.li style={li}>
                            <Link to="header" smooth={true} duration={1000} onClick={handleClickk}>Home</Link>
                        </animated.li>
                        <animated.li style={lii}>
                            <Link to="about" smooth={true} duration={1000} onClick={handleClickk}>About</Link>
                        </animated.li>
                        <animated.li style={liii}>
                            <Link to="project" smooth={true} duration={1000} onClick={handleClickk}>Project</Link>
                        </animated.li>
                        <animated.li style={liiii}>
                            <Link to="contact" smooth={true} duration={1000} onClick={handleClickk}>Contact</Link>
                        </animated.li>
        </ul>
    </nav>
    );
};

export default Navigation;