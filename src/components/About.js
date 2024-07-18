import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-navy to-gray-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify center w-full h-full'>
      <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
      </div>
      <p className='text-xl mt-20'>Hello! I am a dedicated frontend developer and software 
        engineer with a strong passion for creating innovative and efficient web solutions.
         I earned my bachelor's degree in Computer Science from Batangas State University, 
         graduating as Cum Laude. My academic journey has equipped me with a solid foundation
          in software development and problem-solving skills.</p>

           <br />

           <p className='text-xl'>I thrive on leveraging modern technologies to
             build dynamic, user-centric applications. Committed to continuous 
             learning and improvement, I always strive to stay ahead in the 
             ever-evolving tech landscape.</p>
      </div>
   
    </div>
  )
}

export default About
