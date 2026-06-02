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
          I like building things that feel useful, interactive, and
          alive.
        </p>

        <div className='mt-10 grid gap-6 text-base leading-7 tracking-[-0.01em] text-foreground/65 sm:grid-cols-2'>
          <p>
            I got my bachelor's China and master's in the United States, both in Computer Science, and
            have 3 years of professional software engineering experience. My
            work has moved across frontend, backend, and now AI-driven
            development (who hasn't?).
          </p>
          <p>
            I currently live in Lawrence Township, New Jersey. When I am not
            coding, I play games and guitar, visit galleries and museums, or
            take long city walks.
          </p>
        </div>
      </div>
    </section>
  );
}
