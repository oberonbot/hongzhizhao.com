'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-28 py-16 sm:py-24'>
      <div className='mb-10 grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]'>
        <SectionHeading>Studies</SectionHeading>
        <div>
          <h2 className='max-w-[780px] text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.9] tracking-[-0.08em]'>
            Toy projects from a learning season.
          </h2>
          <p className='mt-6 max-w-[540px] text-lg leading-7 text-foreground/60'>
            Three small builds from college: imperfect, useful, a little
            overworked, and still part of the story.
          </p>
        </div>
      </div>

      <div className='space-y-6 sm:space-y-10'>
        {projectsData.map((project, index) => (
          <Project key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
}
