import React, { useState, useEffect } from 'react';
import "../styles/navigationStyle.css";
import {useSpring, animated} from 'react-spring';
import Logo from '../styles/logo.png';
import {Link} from 'react-scroll';
import Scrollspy from 'react-scrollspy';




const Navigation = () => {
    const [clicked, setClicked] = useState(false);
    const [navbar, setNavbar] = useState(false);
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
    
    const changeBackground = () => {
        if (window.scrollY) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);

        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    

    return (
    <nav className={navbar ? 'nav active' : 'nav'}>
        <animated.div className="logo" style={logo}>
            <img onClick={() => window.location.reload()} src={Logo} width="60" height="60" alt="Logo" />
        </animated.div>
        <div className="menu-icon" onClick={handleClick}>
            <i className={ clicked ? "fas fa-times" : "fas fa-bars"} ></i>
        </div>
        <ul className={clicked ? "" : "close"}>
            <Scrollspy className="scrollspy" items={ ['home', 'about', 'project', 'contact'] } currentClassName="is-current">
                        <animated.li style={li}>
                            <Link to="header" href="#home" smooth={true} duration={1000} onClick={handleClickk}>Home</Link>
                        </animated.li>
                        <animated.li style={lii}>
                            <Link to="about" href="#about" smooth={true} duration={1000} onClick={handleClickk}>About</Link>
                        </animated.li>
                        <animated.li style={liii}>
                            <Link to="project" href="#project" smooth={true} duration={1000} onClick={handleClickk}>Project</Link>
                        </animated.li>
                        <animated.li style={liiii}>
                            <Link to="contact" href="#contact" smooth={true} duration={1000} onClick={handleClickk}>Contact</Link>
                        </animated.li>
            </Scrollspy>
        </ul>
    </nav>
    );
};

export default Navigation;