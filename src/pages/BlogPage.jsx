import React from 'react'
import NavBar from '../components/NavBar'
import BlogCard from '../components/BlogCard'
import CustomFooter from '../components/CustomFooter'

const BlogPage = () => {
  return (
    <div className='flex max-w-fit flex-col items-start px-5 bg-gradient-to-t from-black to-[#101010] bg-dotted-spacing-10 bg-dotted-stone-700'>
        <div className='w-full flex flex-col items-center space-y-5'>
        <NavBar/>
        <div className='pt-10 text-center flex flex-col gap-3'>
        <h1 className='text-white text-6xl font-bold font-dgs'>My Blog</h1>
        <h2 className='text-stone-400 font-dgs text-2xl'>This is the place where I document my hopeful path to success</h2>
        </div>
        <div className='grid grid-cols-4 w-full gap-3'>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
        </div>
        </div>
        <CustomFooter className="w-screen"/>
    </div>
  )
}

export default BlogPage