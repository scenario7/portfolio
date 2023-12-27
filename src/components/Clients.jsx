import React from 'react'
import ltitsolutions from '../images/ltitsolutions.png'

const Clients = () => {
  return (
    <div className='flex flex-col items-center pb-10'>
        <h1 className='text-stone-400 font-bold text-center pb-10 text-2xl font-dgs'>CLIENTS</h1>
        <div className='flex w-full items-center'>
            <a href="https://ltitsolutions.com" target='_blank' className='opacity-50 hover:opacity-100'>
                <img src={ltitsolutions} alt="" className='h-14'/>
            </a>
        </div>
    </div>
  )
}

export default Clients