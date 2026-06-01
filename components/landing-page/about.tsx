'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <section
      ref={ref}
      className='grid scroll-mt-28 gap-8 py-16 sm:py-24 lg:grid-cols-[220px_minmax(0,1fr)]'
      id='about'
    >
      <SectionHeading>About</SectionHeading>

      <div className='max-w-[760px] text-[clamp(1.6rem,4vw,3.7rem)] leading-[1.03] tracking-[-0.055em] text-foreground'>
        <p>
          I came through software by way of school, galleries, games, music,
          and the strange comfort of making something small until it starts to
          feel honest.
        </p>

        <div className='mt-10 grid gap-6 text-base leading-7 tracking-[-0.01em] text-foreground/65 sm:grid-cols-2'>
          <p>
            During undergraduate and postgraduate study, I moved through
            operating systems, web development, machine learning, computer
            vision, NLP, and data analysis. The technical path mattered, but
            mostly because it gave me more ways to make things.
          </p>
          <p>
            I currently live in Plainsboro, New Jersey. When I am not coding,
            I play games and musical instruments, listen closely, and spend
            time in galleries and museums, looking for the human hand inside
            finished and unfinished things.
          </p>
        </div>
      </div>
    </section>
  );
}
