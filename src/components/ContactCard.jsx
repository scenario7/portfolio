import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaBehance, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const ContactCard = () => {
  return (
    <div className='flex items-center flex-col md:flex-row lg:flex-row py-5 px-5 md:justify-between lg:justify-between bg-stone-950 backdrop-opacity-10 w-full rounded-2xl'>
        <div className="flex flex-col items-center md:items-start lg:items-start">
            <h1 className='text-white font-dgs font-semibold text-3xl'>Contact</h1>
            <h1 className='text-stone-300 font-dgs font-regular text-xl lg:text-2xl'>Need some work done? Reach out to me!</h1>
        </div>
        <div className="flex items-center lg:items-end md:items-end py-5 gap-5 text-lg font-semibold">
            <a href="https://linkedin.com/in/kevvinthomas" target='_blank'>
                <button className='text-white font-dgs'>
                    <FaLinkedin/>
                </button>
            </a>
            <a href="https://github.com/scenario7" target='_blank'>
                <button className='text-white font-dgs'>
                    <FaGithub/>
                </button>
            </a>
            <a href="mailto:kevvin.thomas@gmail.com" target='_blank'>
                <button className='text-white font-dgs'>
                    <FaEnvelope/>
                </button>
            </a>
            <a href="https://behance.net/kevvinthomas" target='_blank'>
                <button className='text-white font-dgs'>
                    <FaBehance/>
                </button>
            </a>
            <a href="https://twitter.com/_kevinstappen" target='_blank'>
                <button className='text-white font-dgs'>
                    <FaXTwitter/>
                </button>
            </a>
        </div>
    </div>
  )
}

export default ContactCard