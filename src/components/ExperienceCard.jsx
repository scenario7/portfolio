import React from 'react'
import { FiExternalLink } from "react-icons/fi";

const ExperienceCard = ({params}) => {

  return (
    <div className='w-full flex-col items-start md:flex-row lg:flex-row flex bg-stone-950 rounded-lg px-5 py-5 gap-3 lg:items-center md:items-center justify-between'>
        <div>
        <img src={params.imageURL} alt="" className='h-10 w-10 rounded-full object-cover'/>
        <div>
        <div className='flex items-end gap-3'>
            <h1 className='text-white font-bold font-dgs text-2xl'>{params.company}</h1>
            <h2 className='text-stone-500 font-dgs text-lg'>{params.years}</h2>
        </div>
        <div className='text-stone-400 text-lg'>
            {params.role}
        </div>
        <p className='text-white text-sm'>
            {params.description}
        </p>
        </div>
        </div>
        <a href={params.projectURL} target="_blank">
            <div className='px-3 py-3 bg-black hover:bg-white transition-all rounded-lg text-white hover:text-black'>
                <FiExternalLink className=''/>
            </div>
        </a>
    </div>
  )
}

export default ExperienceCard