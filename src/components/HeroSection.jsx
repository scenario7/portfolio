import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <div className='h-[500px] flex justify-center items-center '>
        <div className=" flex flex-col items-center">
            <h1 className='text-white text-center font-dgs font-regular text-2xl'>Hi, I'm Kevin, a</h1>
            <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'iOS Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Web Developer',
                1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className='text-white text-center font-dgs font-semibold text-5xl lg:text-7xl'
            />
            <h2 className='text-gray-400 text-center font-dgs font-regular text-lg lg:text-2xl'>powered by caffeine and sleep deprivation.</h2>
        </div>
    </div>
  )
}

export default HeroSection