import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Skills from './Skills';
import UpperSection from './UpperSection';

const Home = () => {
    return (
        <div className=''>
            <UpperSection></UpperSection>
            <Projects></Projects>
            <Skills></Skills>
        </div>
    );
};

export default Home;