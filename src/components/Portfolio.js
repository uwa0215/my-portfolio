import React from 'react'
import lemon from '../assets/lemon.png'
import tour from '../assets/tour.png'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: lemon,
            href: 'https://lemon-restauran.vercel.app/',

        },
        {
            id:2,
            src: tour,
            href:'https://travel-jcm.netlify.app/',
        },
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-b from-gray-800 to-navy w-full text-white
    md:h-screen'>
      
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>check out some of my work right here</p>
            </div>

          
            <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id, src, href}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <a href={href} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center' 
                        target="_blank" 
                        rel="noreferrer"
                        >Demo</a>
                        <a className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center'  >Code</a>
                    </div>
                </div>
                
                ))
            }


              
            </div>


        </div>

    </div>
  )
}

export default Portfolio
