'use client';
import { Icons } from '@/components/icons';
import Image from 'next/image';
import React, { useState } from 'react';

const Test = () => {
  return (
    // <div className='flex w-screen h-screen items-center justify-center bg-slate-500'>
    //   <Image
    //     src='/mefull.png'
    //     alt='Photo of Hongzhi'
    //     width='200'
    //     height='200'
    //     priority={true}
    //     className='h-120 w-80 bg-slate-500 object-cover translate-y-16'
    //   />
    // </div>

    <div className='flex min-h-screen flex-col bg-background text-foreground'>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <div className='flex flex-row items-center gap-2 -translate-y-10 lg:-translate-y-5'>
          <Icons.spinner size={45} className='animate-spin' />
          <h1 className='font-heading text-3xl sm:text-4xl leading-tight lg:text-5xl font-bold select-none'>
            Loading...Test
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Test;
