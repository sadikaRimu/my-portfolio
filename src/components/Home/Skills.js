import React from 'react';

const Skills = () => {
    return (
        <div className='my-14'>
            <h2 className='text-center text-5xl font-bold my-12'>Skills</h2>
            <div className='flex flex-col lg:flex-row justify-center'>
                <div className='mr-8'>
                    <h2 className='font-bold text-2xl'>Front-End</h2>
                    <label className='font-bold mr-4'>HTML</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>CSS</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>Bootstrap</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>React JS</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>Tailwind</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>Daisy UI</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>Material UI</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                </div>
                <div className=''>
                    <h2 className='font-bold text-2xl'>Back-End</h2>
                    <label className='font-bold mr-4'>Node JS</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>JavaScript</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>Express JS</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                    <label className='font-bold mr-4'>Mongodb</label>
                    <progress className="progress w-96" value="10" max="100"></progress><br />
                </div>
            </div>
        </div>
    );
};

export default Skills;