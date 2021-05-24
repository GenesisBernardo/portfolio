import React from 'react';
import Header from './Header';
import About from './About';
import Project from './Project';
import "../styles/indexStyle.css";



const Index = () => {
    return (
        <div>
            <Header />
            <About />
            <Project />
        </div>
    );
};

export default Index;