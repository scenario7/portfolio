import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Experiences from '../components/Experiences'

const HomePage = () => {
  return (
    <div className='flex w-full flex-col items-start px-5 py-5'>
        <div className='w-full flex flex-col items-center'>
            <NavBar/>
            <HeroSection/>
        </div>
        <Experiences/>
    </div>
  )
}

export default HomePage