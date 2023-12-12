import React from 'react'

const NavBar = () => {
  return (
    <div className='z-10 bg-[#2b2b2b] backdrop-blur-md py-3 px-3 space-x-3 bg-opacity-20 flex items-center sticky top-10 rounded-full'>
        {/* <button className='text-white hover:bg-stone-800 px-4 py-3 rounded-full justify-center flex items-center space-x-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
        </svg>
        <h1 className='text-white font-dgs text-xl font-medium'>
            Home
        </h1>
        </button> */}
        <img src="https://scenario7.github.io/kevineleven/static/media/profile.ca835f5e2613dacc83ce.PNG" alt="hello" className='h-14 rounded-full'/>
        <div className="flex flex-col items-center">
            <h1 className='text-white font-dgs font-semibold text-xl'>
                Kevin Thomas
            </h1>
            <h1 className='text-stone-400 font-dgs font-regular text-xlg'>
                Bengaluru, IN
            </h1>
        </div>
    </div>
  )
}

export default NavBar