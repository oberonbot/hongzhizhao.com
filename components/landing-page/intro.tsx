'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id='home'
      className='relative flex min-h-[calc(100vh-7rem)] scroll-mt-[100rem] flex-col justify-end pb-16 pt-10 sm:pb-20 lg:pt-20'
    >
      <div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-end'>
        <div className='max-w-[850px]'>
          <p className='mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/55'>
            Hongzhi Zhao / life, images, weather
          </p>

          <h1 className='max-w-[920px] text-[clamp(3.5rem,10vw,8.6rem)] font-normal leading-[0.88] tracking-[-0.08em] text-foreground'>
            Small things,
            <br />
            made by hand.
          </h1>

          <p className='mt-8 max-w-[620px] text-lg leading-7 text-foreground/70 sm:text-xl sm:leading-8'>
            A personal place for the things I keep returning to: photographs,
            sound, awkward beauty, unfinished thoughts, and the quiet texture
            of ordinary days.
          </p>

          <div className='mt-10 flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-[0.18em]'>
            <Link
              href='/photography'
              className='border border-foreground/20 bg-background/30 px-4 py-3 text-foreground/75 backdrop-blur-sm transition hover:bg-foreground hover:text-background'
            >
              Photographs
            </Link>
            <Link
              href='#about'
              className='border border-transparent px-4 py-3 text-foreground/55 transition hover:text-foreground'
            >
              About
            </Link>
          </div>
        </div>

        <div className='relative ml-auto w-full max-w-[300px] lg:mb-8'>
          <div className='absolute -left-7 top-8 h-24 w-24 rotate-[-8deg] border border-foreground/15 bg-background/20' />
          <Image
            src='/me2.png'
            alt='Portrait of Hongzhi Zhao'
            width={360}
            height={360}
            loading='eager'
            priority
            className='relative aspect-[4/5] w-full rotate-[1.5deg] rounded-none border border-foreground/10 object-cover shadow-[18px_18px_0_rgba(15,23,42,0.08)] grayscale-[15%]'
          />
          <p className='mt-4 max-w-[260px] font-mono text-[11px] uppercase leading-5 tracking-[0.16em] text-foreground/50'>
            Not a pitch deck. Just a room with my name on the door.
          </p>
        </div>
      </div>
    </section>
  );
}
