import React from 'react'

const ContactCard = () => {
  return (
    <div className='flex items-center flex-col md:flex-row lg:flex-row py-5 px-5 md:justify-between lg:justify-between bg-stone-950 backdrop-opacity-10 w-full rounded-2xl'>
        <div className="flex flex-col items-center md:items-start lg:items-start">
            <h1 className='text-white font-dgs font-semibold text-3xl'>Contact</h1>
            <h1 className='text-stone-300 font-dgs font-regular text-xl'>Need some work done? Reach out to me!</h1>
        </div>
        <div className="flex items-center py-5 space-x-4 text-lg font-semibold">
            <a href="https://linkedin.com/in/kevvinthomas" target='_blank'>
                <button className='text-blue-300 font-dgs'>
                    LinkedIn
                </button>
            </a>
            <a href="https://github.com/scenario7" target='_blank'>
                <button className='text-stone-300 font-dgs'>
                    GitHub
                </button>
            </a>
            <a href="mailto:kevvin.thomas@gmail.com" target='_blank'>
                <button className='text-red-300 font-dgs'>
                    Email
                </button>
            </a>
            <a href="https://behance.net/kevvinthomas" target='_blank'>
                <button className='text-blue-100 font-dgs'>
                    Behance
                </button>
            </a>
        </div>
    </div>
  )
}

export default ContactCard