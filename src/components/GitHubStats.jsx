import React from 'react';

const GitHubStats = () => {
  return (
    <div className='flex md:flex-row lg:flex-row flex-col items-center justify-between w-full space-y-5'>
      <div className='flex gap-3 items-center md:items-start lg:items-start'>
        <img
          src="https://avatars.githubusercontent.com/u/77824686?v=4"
          alt=""
          className='h-16 w-16 md:h-20 md:w-20 lg:h-20 lg:w-20 rounded-full'
        />
        <div className='flex flex-col'>
          <h1 className='text-4xl md:text-5xl font-semibold text-white font-dgs'>GitHub Stats</h1>
          <a href='https://github.com/scenario7' target='_blank'>
            <h1 className='text-lg md:text-xl font-regular text-stone-300 font-dgs pl-1 underline'>
              github.com/scenario7
            </h1>
          </a>
        </div>
      </div>
      <div className='flex md:flex-row lg:flex-row flex-col gap-3 lg:gap-3 md:gap-3'>
        <a href="https://github.com/anuraghazra/github-readme-stats">
          <img
            height='200px'
            align=""
            src="https://github-readme-stats.vercel.app/api?username=scenario7&theme=dark&hide_border=true&hide_rank=true"
            className='w-[150px] md:w-[200px] lg:w-[200px]'
          />
        </a>
        <a href="https://github.com/anuraghazra/convoychat">
          <img
            height='200p'
            align=""
            src="https://github-readme-stats.vercel.app/api/top-langs?username=scenario7&theme=dark&hide_border=true&layout=compact&langs_count=8&card_width=320"
            className='w-[150px] md:w-[200px] lg:w-[200px]'
          />
        </a>
      </div>
    </div>
  );
};

export default GitHubStats;
