import React from 'react'
import HeroSection from '../components/HeroSection'
import NavBar from '../components/NavBar'
import Projects from '../components/Projects'
import CustomFooter from '../components/CustomFooter'
import ContactCard from '../components/ContactCard'

const HomePage = () => {
  return (
    <div className='flex max-w-fit flex-col items-start px-5 bg-gradient-to-t from-black to-[#101010]'>
        <div className='w-full flex flex-col items-center space-y-5'>
            <NavBar/>
            <HeroSection/>
            <Projects/>
            <ContactCard/>
            <CustomFooter/>
        </div>
    </div>
  )
}

export default HomePage