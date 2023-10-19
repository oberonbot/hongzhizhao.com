'use client';
import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { componentData } from '@/lib/data';
import Link from 'next/link';
import { cn, formatDate } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';

type componentInfoProps = {
  title: string;
  subtitle?: string;
  time: string;
  id: string;
  videoUrl: string;
  content: React.ReactNode;
};

const page = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[2];

  let component:
    | {
        title: string;
        subtitle?: string;
        time: string;
        id: string;
        videoUrl: string;
        content: React.ReactNode;
      }
    | undefined = undefined;

  for (let i = 0; i < componentData.length; i++) {
    let subArray = componentData[i];
    component = subArray.find(
      (compoInfo: componentInfoProps) => compoInfo.id === id
    );

    if (component) {
      break;
    }
  }

  if (component) {
    const { title, subtitle, time, id, videoUrl, content } = component;

    return (
      <div className='w-full lg:4/5 xl:w-2/3 '>
        <div className='flex flex-col fixed w-[150px] top-[90px] h-0 sm:h-12 -translate-x-[175px]'>
          <Link
            href='/ui-dojo'
            className={cn(
              buttonVariants({ variant: 'ghost' }),
              'hidden xl:inline-flex justify-start'
            )}
          >
            <Icons.chevronLeft className='mr-2 h-4 w-4' />
            Back to Dojo
          </Link>
        </div>
        <div className='w-full py-6 lg:pt-10'>
          <div>
            <time
              dateTime={time}
              className='block text-sm text-muted-foreground'
            >
              Published on {formatDate(time)}
            </time>
            <h1 className='mt-2 font-heading text-4xl leading-tight lg:text-5xl font-bold'>
              {title}
            </h1>
            <h1 className='mt-4 font-heading text-xl lg:text-2xl text-foreground/60'>
              {subtitle}
            </h1>
          </div>
          <hr className='mt-5' />
          <div className='py-12'>{content}</div>
          <hr />
          <div className='flex justify-center py-6'>
            <Link
              href='/ui-dojo'
              className={cn(buttonVariants({ variant: 'ghost' }))}
            >
              <Icons.chevronLeft className='mr-2 h-4 w-4' />
              Back to Dojo
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Not Found</div>;
  }
};

export default page;
