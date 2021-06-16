import React from 'react';
import Header from './Header';
import About from './About';
import Project from './Project';
import Info from './Info';
import Contact from './Contact';
import Footer from './Footer';
import "../styles/indexStyle.css";



const Index = () => {
    return (
        <div>
            <Info />
            <Header />
            <About />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
};

export default Index;