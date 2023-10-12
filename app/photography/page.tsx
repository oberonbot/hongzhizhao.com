import React from 'react';
import { photographyData } from '@/lib/data';
import SmoothPhoto from '@/components/smooth-photo';

export const metadata = {
  title: 'Photography',
};

const page = () => {
  return (
    <div className='flex min-h-screen flex-col'>
      <div className='flex-1 flex flex-col justify-center items-center pt-12 px-4 sm:px-6 lg:flex-none lg:px-28'>
        <div className='container max-w-full pt-6 lg:pt-10'>
          <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
            <div className='flex-1 space-y-4'>
              <h1 className='inline-block font-heading text-4xl tracking-tight lg:text-5xl font-bold'>
                Photography
              </h1>
              <p className='text-xl text-muted-foreground'>
                All photos are shot on my phone, just saying.
              </p>
            </div>
          </div>
          <hr className='my-8' />
        </div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[0.25rem] pb-10 sm:pb-20 px-1'>
        {photographyData.map((photoInfo, index) => (
          <div key={index} className='col-span-1 relative group'>
            <SmoothPhoto
              key={index}
              filename={photoInfo.filename}
              place={[photoInfo.place[0], photoInfo.place[1]]}
              time={photoInfo.time}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
