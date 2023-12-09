import React from 'react'

const Marquee = () => {
  return (
    <div class="bg-white relative h-12 flex overflow-x-hidden">
            <div class="py-1 animate-marquee whitespace-nowrap">
                <span class="text-2xl font-medium font-dgs mx-4">iOS Developer</span>
                <span class="text-2xl font-medium font-dgs mx-4">Web Developer</span>
                <span class="text-2xl font-medium font-dgs mx-4">UI Designer</span>
                <span class="text-2xl font-medium font-dgs mx-4">Graphic Designer</span>
            </div>
            <div class="absolute top-0 py-1 animate-marquee2 whitespace-nowrap">
                <span class="text-2xl font-medium font-dgs mx-4">iOS Developer</span>
                <span class="text-2xl font-medium font-dgs mx-4">Web Developer</span>
                <span class="text-2xl font-medium font-dgs mx-4">UI Designer</span>
                <span class="text-2xl font-medium font-dgs mx-4">Graphic Designer</span>
            </div>
        </div>
  )
}

export default Marquee