import React from 'react';

const GitHubStats = () => {
  return (
    <div className='w-full'>
    <h1 className='text-stone-400 font-bold text-center pb-10 text-2xl font-dgs'>GITHUB STATS</h1>

    <div className='flex md:flex-row lg:flex-row flex-col items-center justify-between w-full space-y-5'>
      <div className='flex gap-3 items-center md:items-center lg:items-center'>
        <img
          src="https://avatars.githubusercontent.com/u/77824686?v=4"
          alt=""
          className='h-16 w-16 md:h-20 md:w-20 lg:h-20 lg:w-20 rounded-full'
        />
      </div>
      <div className='flex md:flex-row lg:flex-row flex-col lg:gap-3 md:gap-3'>
        <a href="https://github.com/scenario7">
          <img
            height='200px'
            align=""
            src="https://github-readme-stats.vercel.app/api?username=scenario7&theme=dark&hide_border=true&hide_rank=true"
            className='h-40 md:h-48 lg:h-48 w-56'
          />
        </a>
        <a href="https://github.com/scenario7">
          <img
            height='200p'
            align=""
            src="https://github-readme-stats.vercel.app/api/top-langs?username=scenario7&theme=dark&hide_border=true&layout=compact&langs_count=8&card_width=320"
            className='h-40 md:h-48 lg:h-48 w-56'
          />
        </a>
      </div>
    </div>
    </div>
  );
};

export default GitHubStats;
