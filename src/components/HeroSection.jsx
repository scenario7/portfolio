import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative w-full h-96 flex justify-center items-center'>
        <div className='absolute bg-stone-300 opacity-20 h-36 w-36 lg:h-52 lg:w-52 rounded-full blur-2xl'></div>
        <div className="absolute flex flex-col items-center">
            <h1 className='text-white text-center font-dgs font-semibold text-5xl lg:text-7xl py-5'>Namaste, I'm Kevin.</h1>
            <h2 className='text-gray-400 text-center font-dgs font-regular text-lg lg:text-2xl'>I'm an iOS Developer and UI Designer based out of Bangalore, IN.</h2>
        </div>
    </div>
  )
}

export default HeroSection