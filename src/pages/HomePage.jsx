import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import CustomFooter from '../components/CustomFooter'

const HomePage = () => {
  return (
    <div className='flex max-w-fit flex-col items-start px-5 py-5'>
        <div className='w-full flex flex-col items-center'>
            <NavBar/>
            <HeroSection/>
            <Projects/>
            <CustomFooter/>
        </div>
    </div>
  )
}

export default HomePage