import React from 'react';
import { componentData } from '@/lib/data';
import DojoCard from '@/components/ui-dojo-card';

export const metadata = {
  title: 'UI Dojo',
};

const page = () => {
  return (
    <div className='container max-w-full py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-heading text-4xl tracking-tight lg:text-5xl font-bold'>
            UI Dōjō
          </h1>
          <p className='text-xl text-muted-foreground'>
            This is the place for my best practiced UI components.
          </p>
        </div>
      </div>
      <hr className='my-8' />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 pb-10 sm:pb-20 px-1'>
        <div className='col-span-1 flex flex-col gap-2'>
          {componentData[0].map((componentInfo, index) => (
            <DojoCard key={index} {...componentInfo} />
          ))}
        </div>
        <div className='col-span-1 flex flex-col gap-2'>
          {componentData[1].map((componentInfo, index) => (
            <DojoCard key={index} {...componentInfo} />
          ))}
        </div>
        <div className='col-span-1 flex flex-col gap-2'>
          {componentData[2].map((componentInfo, index) => (
            <DojoCard key={index} {...componentInfo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
