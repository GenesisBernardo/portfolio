import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../styles/projectStyle.css';
import Intellipet from '../styles/Intellipet-home.JPG';

const Project = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    
    return (
        <div className="project">
            <div className="container">
                <div className="project-h1">
                    <h1>Project</h1>
                    <span className="first-span"></span>
                    <span className="second-span"></span>
                </div>
                <div data-aos="zoom-in" className="grid-wrapper">
                    <div className="grid-content">
                    <div className="project-paragraph">
                        <p>Featured Project</p>
                    </div>
                    <div className="project-title">
                        <h2>Intellipetph</h2>
                    </div>
                        <div className="project-description">
                            <p>
                               A online catalogue made for the existing and future customers of Intellipetph company, 
                               from that website they can view all products of Intellipetph.
                            </p>
                        </div>
                        <div className="project-language">
                            <p>
                               Html Css Js Bootstrap Php Wordpress Woocommerce
                            </p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/bchiang7/octoprofile" aria-label="GitHub Link" 
                                rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                                    strokeLinejoin="round" className="feather feather-github">
                                    <title>
                                        GitHub
                                    </title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 
                                        6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 
                                        2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 
                                        5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://octoprofile.now.sh" aria-label="External Link" 
                                className="external" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" strokeWidth="2" 
                                    strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                    <title>External Link</title>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                                    </path><polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="grid-image">
                        <a href="https://Intellipetph.com" rel="noopener noreferrer" target="_blank">
                            <img src={Intellipet} alt="intellipet-website"/>
                        </a>
                    </div>
                </div>
                <div data-aos="zoom-in" className="grid-wrapper">
                    <div className="grid-content">
                    <div className="project-paragraph">
                        <p>Featured Project</p>
                    </div>
                    <div className="project-title">
                        <h2>Intellipetph</h2>
                    </div>
                        <div className="project-description">
                            <p>
                               A online catalogue made for the existing and future customers of Intellipetph company, 
                               from that website they can view all products of Intellipetph.
                            </p>
                        </div>
                        <div className="project-language">
                            <p>
                               Html Css Js Bootstrap Php Wordpress Woocommerce
                            </p>
                        </div>
                        <div className="project-links">
                            <a href="https://github.com/bchiang7/octoprofile" aria-label="GitHub Link" 
                                rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                                    strokeLinejoin="round" className="feather feather-github">
                                    <title>
                                        GitHub
                                    </title>
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 
                                        6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 
                                        2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 
                                        5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                    </path>
                                </svg>
                            </a>
                            <a href="https://octoprofile.now.sh" aria-label="External Link" 
                                className="external" rel="noopener noreferrer" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" 
                                    fill="none" stroke="currentColor" strokeWidth="2" 
                                    strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link">
                                    <title>External Link</title>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6">
                                    </path><polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="grid-image">
                        <a href="https://Intellipetph.com" rel="noopener noreferrer" target="_blank">
                            <img src={Intellipet} alt="intellipet-website"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;