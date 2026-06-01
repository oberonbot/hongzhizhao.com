'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';

export default function Skills() {
  return (
    <section
      id='skills'
      className='grid scroll-mt-28 gap-8 py-16 sm:py-24 lg:grid-cols-[220px_minmax(0,1fr)]'
    >
      <SectionHeading>Materials</SectionHeading>

      <div>
        <p className='max-w-[680px] text-[clamp(2rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.075em]'>
          The tools change. The habit is looking closely.
        </p>

        <ul className='mt-10 flex max-w-[760px] flex-wrap gap-x-5 gap-y-3 text-base leading-6 text-foreground/58 sm:text-lg'>
          {skillsData.map((skill) => (
            <li key={skill} className='after:ml-5 after:text-foreground/20 after:content-["/"] last:after:content-[""]'>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
