import React from 'react'
import pfp from '../images/portfoliopfp.jpg'
import profile from '../images/profile.jpg'

const NavBar = () => {
  return (
    <div className='z-10 bg-[#2b2b2b] backdrop-blur-md py-3 px-6 justify-between space-x-3 bg-opacity-20 flex items-center sticky top-10 rounded-full'>
        {/* <button className='text-white hover:bg-stone-800 px-4 py-3 rounded-full justify-center flex items-center space-x-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
        <h1 className='text-white font-dgs text-xl font-medium'>
            Home
        </h1>
        </button> */}
        <img src={profile} alt="hello" className='h-14 lg:h-16 rounded-full'/>
        <div className="flex flex-col items-start">
            <h1 className='text-white font-dgs font-semibold text-xl lg:text-2xl text-center w-full'>
                Kevin Thomas
            </h1>
            <div className="flex text-stone-400 font-sans font-regular text-xs space-x-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 lg:h-6 lg:w-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
            </svg>
            <h1 className='lg:text-lg'>
                Bengaluru, IN
            </h1>
            </div>
        </div>
    </div>
  )
}

export default NavBar