import React from 'react'

const ProjectCard = ({icon, title, description, url, numbers, technologies, github}) => {

  return (
    <div className=' bg-gradient-to-tr from-[#101010] to-stone-900 backdrop-blur-md text-white w-full px-5 py-5 flex flex-col md:flex-row lg:flex-row md:space-x-5 lg:space-x-5 items-center space-y-4 rounded-2xl'>
        <img src={icon} alt="bruh" className='h-24 rounded-lg'/>
        <div className='flex flex-col items-center lg:items-start md:items-start space-y-3'>
            <h1 className='text-white font-dgs text-3xl font-semibold text-center md:text-left'>{title}</h1>
            {numbers !== "" && (
            <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <h1 className='font-sans font-light text-stone-300 lg:text-xl'>{numbers}</h1>
            </div>
            )}
            <p className='text-stone-300 font-regular text-xs text-center md:text-left lg:text-xl'>{description}</p>
            <div className='flex space-x-3'>
                {technologies.map((tech, index) => (
                    <div className=''>
                        <h1 className='bg-stone-800 rounded-full text-stone-400 text-sm px-2 py-1 lg:text-lg outline outline-[0.5px] outline-stone-700 font-light'>{tech}</h1>
                    </div>
                ))}
            </div>
            <div className='flex space-x-2'>
                <a href={url} target='_blank'>
                <button className='bg-blue-600 transition-colors ease-in-out hover:bg-blue-800 rounded-full flex text-center text-white text-xs px-3 py-2 font-regular items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                        Download
                </button>
                </a>
                {github !== "" && (
                    <a href={github} target='_blank'>
                        <button className='bg-black transition-colors ease-in-out hover:bg-white hover:text-black rounded-full flex text-center text-white text-xs px-3 py-2 font-regular items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                        GitHub
                        </button>
                    </a>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard