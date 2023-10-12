import React from 'react';

export const metadata = {
  title: 'Projects',
};

const page = () => {
  return (
    <div className='flex min-h-screen flex-col bg-background text-foreground'>
      <div className='flex-1 flex flex-col justify-center items-center'>
        <div className='flex flex-row items-center -translate-y-10 lg:-translate-y-5'>
          <h1 className='font-heading text-3xl sm:text-4xl leading-tight lg:text-5xl font-bold select-none'>
            Work In Progress
          </h1>
        </div>
      </div>
    </div>
  );
};

export default page;
