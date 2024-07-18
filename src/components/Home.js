import React from 'react'
import hero from "../assets/hero.jpg"
import {MdKeyboardArrowRight} from "react-icons/md";
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
     from-gray-700 via-gray to-navy' >

      <div className='max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                I'm Joshua S. Macasadia
            </h2>
            <h3 className='text-2xl sm:text-3xl font-bold text-winter mt-1'>Frontend Developer</h3>
            <p className='text-gray-500 py-4 max-w-md' >
            Passionate frontend developer specializing in creating engaging and responsive
             web applications using modern technologies. Experienced in leveraging React
              and other frameworks to build dynamic user interfaces that enhance user experience.
            </p>

            <div>
                <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex 
                items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer '>
                    Portfolio 
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={25} className='ml-1'/></span> 
                </Link>
            </div>
        </div>

        <div><img src={hero} alt="My Profile"
         className='rounded-3xl mx-auto w-2/3 md:w-full' /></div>
      </div>
    </div>
  )
}

export default Home
