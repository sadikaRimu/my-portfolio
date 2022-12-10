import React from 'react';
import { Link } from 'react-router-dom';
import sadika from '../../images/sadika.png';
import rimu from '../../images/rimu.jpg';
import './UpperSection.css';
import resume from '../../assests/Sadika-Resume.pdf';
import jsPDF from 'jspdf';

const UpperSection = () => {
    const downloadResume = () => {
        var doc = new jsPDF();
        doc.addImage(resume, 10, 10)
        doc.save('resume.pdf');
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={rimu} className="max-w-sm rounded-lg shadow-2xl p-5" alt='' />
                <div>
                    <h1 className="text-3xl font-bold text-gray-600">Hi, There, I am</h1><br />
                    <h1 className="text-5xl font-bold">Sadika Afrin</h1>
                    <h1 className="text-xl font-bold text-gray-600 ml-28">Front-End Developer</h1><br />
                    <p className="py-6">To build my career as a Front-End developer where I can show my skills and prove myself as a quick learner and highly qualified professional and help my community through my skills and specializations. I always look for challenges where I can use my potential at most and always love to work on cutting edge technologies. I have 1 year experience on React.js developed a few frontend as well as full stack projects using React.js, Node.js and Mongodb and also have 8 month internship experience on React.js</p>
                    <a href='https://www.linkedin.com/in/sadika-afrin/'><button className="btn btn-primary mx-4">Linkedin</button></a>
                    <a href='https://github.com/sadikaRimu'><button className="btn btn-primary mx-4">Github</button></a>
                    <button onClick={downloadResume} className="btn btn-primary mx-4">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default UpperSection;