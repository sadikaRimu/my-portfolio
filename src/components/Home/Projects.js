import React from 'react';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import project1 from '../../images/project1.PNG';
import project2 from '../../images/project2.PNG';
import project3 from '../../images/project3.PNG';

const Projects = () => {
    return (
        <div>
            <h2 className='text-center text-5xl font-bold my-12'>My Projects</h2>
            <div className='mt-14 ml-36'>
                <div className='grid gap-4 grid-cols-1 lg:grid-cols-3'>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-8">
                        <figure><img src={project1} alt="Shoes" /></figure>
                        <div className="card-body mt-4">
                            <h2 className="card-title text-3xl">The Big Bookshelf</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-8">
                        <figure><img src={project2} alt="Shoes" /></figure>
                        <div className="card-body mt-4">
                            <h2 className="card-title text-3xl">The Tasteful Service</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl mx-8">
                        <figure><img src={project3} alt="Shoes" /></figure>
                        <div className="card-body mt-4">
                            <h2 className="card-title text-3xl">Learn Programming Languages</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View Project</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;