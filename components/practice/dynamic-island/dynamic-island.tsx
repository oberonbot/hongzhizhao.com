import Image from 'next/image';
import React from 'react';
import RadioWave from './radio-wave';
import { Icons } from '@/components/icons';
import Code from '@/components/ui/code';

const DynamicIsland = () => {
  return (
    <div className='w-full flex flex-col gap-16'>
      <div className='flex flex-col items-center select-none h-[160px]'>
        <div className='relative group h-[35px] bg-black rounded-[46px] border-[1px] border-neutral-800 w-[190px] transition-all duration-300 ease-out active:animate-island-active active:w-[370px]  active:h-[180px] flex active:flex-col active:gap-4 active:p-[20px]'>
          {/* Thumbnail, title and artist */}
          <div className='px-[10px] active:px-0 w-full flex flex-row justify-between active:justify-normal items-center  group-active:gap-[15px]'>
            <Image
              alt='album'
              width={150}
              height={150}
              src='/images/ui-dojo/dynamic-island/album.jpg'
              className='w-[20px] h-[20px] object-cover rounded-md transition-all  group-active:w-[55px] group-active:h-[55px] group-active:rounded-[1rem] group-active:transition-all group-active:duration-500'
            ></Image>
            <div className='w-[220px] flex-col justify-center hidden group-active:flex'>
              <p className='font-sans font-bold text-white text-sm '>
                What is Love?
              </p>
              <p className='font-sans font-semibold text-neutral-500 text-sm '>
                TWICE
              </p>
            </div>
            <div className='group-active:-translate-y-2'>
              <div className='transition-all w-[20px] h-[20px]'>
                <RadioWave />
              </div>
            </div>
          </div>
          {/* Progress Bar */}
          <div className='w-full hidden group-active:flex flex-row gap-2 text-xs font-semibold text-neutral-400 justify-between'>
            <p>1:58</p>
            <div className='w-full flex flex-row items-center'>
              <div className='w-1/3 h-[10px] rounded-l-full bg-neutral-400'></div>
              <div className='w-2/3 h-[10px] rounded-r-full bg-neutral-700'></div>
            </div>
            <p>-1:31</p>
          </div>
          {/* Bottom controls */}
          <div className='w-full hidden items-center px-1 py-1 group-active:grid grid-cols-5 gap-11'>
            <div className='grid-span-1'>
              <Icons.starOutline size={24} color='#a3a3a3' />
            </div>
            <div className='grid-span-1'>
              <Icons.playBack size={24} color='#fff' />
            </div>
            <div className='grid-span-1'>
              <Icons.pause size={32} color='#fff' />
            </div>
            <div className='grid-span-1'>
              <Icons.playForward size={24} color='#fff' />
            </div>
            <div className='grid-span-1'>
              <Icons.airdrop />
            </div>
          </div>
        </div>
        {/* <div className='relative bg-black rounded-[46px] border-[1px] border-neutral-800  transition-all duration-300 ease-out w-[370px] h-[180px] flex flex-col gap-4 p-[20px]'>
          <div className='flex flex-row gap-[15px]'>
            <Image
              alt='album'
              width={100}
              height={100}
              src='/images/ui-dojo/dynamic-island/album.jpg'
              className='w-[55px] h-[55px] object-cover rounded-[1rem]'
            ></Image>
            <div className='w-[220px] flex flex-col justify-center'>
              <p className='font-sans font-bold text-white text-sm '>
                What is Love?
              </p>
              <p className='font-sans font-semibold text-neutral-500 text-sm '>
                TWICE
              </p>
            </div>
            <div className='flex flex-col pt-2'>
              <div className='transition-all w-[20px] h-[20px]'>
                <RadioWave />
              </div>
            </div>
          </div>
          <div className='w-full flex flex-row gap-2 text-xs font-semibold text-neutral-400 justify-between'>
            <p>1:58</p>
            <div className='w-full flex flex-row items-center'>
              <div className='w-1/3 h-[10px] rounded-l-full bg-neutral-400'></div>
              <div className='w-2/3 h-[10px] rounded-r-full bg-neutral-700'></div>
            </div>
            <p>-1:31</p>
          </div>
          <div className='w-full items-center px-1 py-1 grid grid-cols-5 gap-11'>
            <div className='grid-span-1'>
              <Icons.starOutline size={24} color='#a3a3a3' />
            </div>
            <div className='grid-span-1'>
              <Icons.playBack size={24} color='#fff' />
            </div>
            <div className='grid-span-1'>
              <Icons.pause size={32} color='#fff' />
            </div>
            <div className='grid-span-1'>
              <Icons.playForward size={24} color='#fff' />
            </div>
            <div className='grid-span-1'>
              <Icons.airdrop />
            </div>
          </div>
        </div> */}
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-heading select-none'>Description</h1>
        <p>
          This is designed and implemented by myself.I can only say that only
          the first stage of this animation is completed. All I used is
          animation, transition and other CSS properties. The animation seems to
          be very smooth, but if you click frequently, it is easy to find
          problems, so I still have A lot to do. In this exercise, the most
          interesting thing is the implementation of radio wave. How to achieve
          a layout with a hollow effect like this?
        </p>
        <p>
          The method I use is to use a shadow box. I use the shadow box to
          simulate the effect of the mask, and use <Code>overflow: hidden</Code>{' '}
          to ensure that these shadows do not affect each other. In the future I
          plan to use framer motion to achieve some effects.
        </p>
      </div>
    </div>
  );
};

export default DynamicIsland;
