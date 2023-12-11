import React from 'react'

const CustomFooter = () => {
  return (
    <div className='flex flex-col items-center space-x-5'>
        <div className="flex items-center py-5 space-x-4 text-lg font-bold">
            <a href="https://linkedin.com/in/kevvinthomas" target='_blank'>
                <button className='text-white font-dgs'>
                    LinkedIn
                </button>
            </a>
            <a href="https://github.com/scenario7" target='_blank'>
                <button className='text-white font-dgs'>
                    GitHub
                </button>
            </a>
        </div>
        <h1 className='text-stone-300 text-center text-xs '>
            I made this using React.js, Tailwind and Sanity
        </h1>
    </div>
  )
}

export default CustomFooter