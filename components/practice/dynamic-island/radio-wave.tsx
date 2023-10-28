import Image from 'next/image';
import React from 'react';

const RadioWave = () => {
  return (
    <div className='relative w-full h-full'>
      <Image
        alt='album'
        width={100}
        height={100}
        src='/images/ui-dojo/dynamic-island/album.jpg'
        className='w-full h-full object-cover'
      ></Image>
      <div className='w-full h-full flex flex-row items-center absolute top-0 left-0 bg-transparent backdrop-blur-sm'>
        <div className='h-full w-1/6 flex items-center overflow-hidden'>
          <div className='h-[20%] w-[60%] bg-transparent shadow-pure-black rounded-full animate-[radio-bar_0.7s_ease-in-out_infinite]'></div>
        </div>
        <div className='h-full w-1/6 flex items-center overflow-hidden'>
          <div className='h-[20%] w-[60%] bg-transparent shadow-pure-black rounded-full animate-[radio-bar_0.9s_ease-in-out_infinite_0.5s]'></div>
        </div>
        <div className='h-full w-1/6 flex items-center overflow-hidden'>
          <div className='h-[20%] w-[60%] bg-transparent shadow-pure-black rounded-full animate-[radio-bar_0.7s_ease-in-out_infinite_0.4s]'></div>
        </div>
        <div className='h-full w-1/6 flex items-center overflow-hidden'>
          <div className='h-[20%] w-[60%] bg-transparent shadow-pure-black rounded-full animate-[radio-bar_0.8s_ease-in-out_infinite_0.7s]'></div>
        </div>
        <div className='h-full w-1/6 flex items-center overflow-hidden'>
          <div className='h-[20%] w-[60%] bg-transparent shadow-pure-black rounded-full animate-[radio-bar_0.7s_ease-in-out_infinite_1s]'></div>
        </div>
        <div className='h-full w-1/6 flex items-center overflow-hidden'>
          <div className='h-[20%] w-[60%] bg-transparent shadow-pure-black rounded-full animate-[radio-bar_1s_ease-in-out_infinite_0.3s]'></div>
        </div>
      </div>
    </div>
  );
};

export default RadioWave;
