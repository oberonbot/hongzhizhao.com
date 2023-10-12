import React from 'react';
import { Icons } from '@/components/icons';

const Loading = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background text-foreground'>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <div className='flex flex-row items-center gap-2 -translate-y-10 lg:-translate-y-5'>
          <Icons.spinner size={45} className='animate-spin' />
          <h1 className='font-heading text-3xl sm:text-4xl leading-tight lg:text-5xl font-bold select-none'>
            Loading...
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Loading;
