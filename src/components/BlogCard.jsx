import React from 'react'

const BlogCard = () => {
  return (
    <div className=' bg-gradient-to-tr from-[#101010] to-stone-900 backdrop-blur-md flex-col text-white w-full px-5 py-5 flex md:space-x-5 lg:space-x-5 items-start space-y-4 rounded-2xl'>
        <img src="https://substackcdn.com/image/fetch/w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F656f9b87-dc4e-4ad1-ae3d-8b1ca49121e8_960x1280.jpeg" alt="" className='w-full h-48 rounded-xl'/>
        <h1 className='text-xl'>No I"m not lazy</h1>
        <h1 className='text-lg text-stone-500'>This is a long ass description of something really boring and tasteless</h1>
        <button className='hover:bg-stone-200 px-3 py-2 rounded-lg hover:text-black bg-black text-white transition-colors'>Read</button>
    </div>
  )
}

export default BlogCard