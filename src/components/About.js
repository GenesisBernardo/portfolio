import React, { useEffect } from 'react';
import '../styles/aboutStyle.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    

    return (
        <div className="about">
            <div className="container">
                <div className="about-h1">
                    <h1>About Me</h1>
                    <span className="first-span"></span>
                    <span className="second-span"></span>
                </div>
                <div className="about-inner">
                    <div data-aos="zoom-in" className="profile">
                        <div></div>
                        <p>
                            <b>LOCATION:</b>
                        </p>
                        <p>
                                Metro Manila, Philippines
                            </p>
                    </div>
                    <div data-aos="zoom-in" className="about-p">
                            Hi, my name is Genesis. I've been studying web development for the past years.
                            My interest in web development started back in 2014 when I got a part time job in
                            an e-commerce company I've been assigned to edit pictures using photoshop and upload product items on
                            the back office admin of their website, I got curious on how they built a website
                            like that so I decided to study web development and dream to make one someday.
                    <div className="line-break"></div>
                            Later on when I already had knowledge in web development I got promoted to a web administrator in that same company 
                            and I am now the one who maintains and updates the website.
                            After that I started freelancing and continuing to learn new technology for web development.
                            Over the past years, coding has become a passion of mine specifically in the realm of web development. 
                            I've dedicated my time to gaining proficiency in all intricacies of web development in order to better myself as a developer and problem solver. 
                            I am able to create clean and functional websites.
                    <div className="line-break"></div>
                            Here are the technologies I learned so far:
                    <ul className="skill-list">
                        <li>Html</li>
                        <li>JavaScript</li>
                        <li>Css</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>WordPress</li>
                        <li>Php</li>
                        <li>MySQL</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;