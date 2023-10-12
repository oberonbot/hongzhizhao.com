'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
        During my undergraduate and postgraduate studies, I have been exposed to
        and mastered knowledge in many fields, from
        <span className='font-medium'> operating system </span>
        to
        <span className='font-medium'> full-stack web development</span>, to
        <span className='font-medium'>&nbsp;Machine Learning, </span>
        such as
        <span className='font-medium'> Computer Vision and NLP</span>, and even
        <span className='font-medium'> data analysis</span>.
        <span className='italic'>
          I strive for elegant, readable and maintainable code and
          products.&nbsp;
        </span>
        My current core stack is
        <span className='font-medium'>
          React, Next.js, Node.js and MongoDB,
        </span>
        and of course UI libraries like
        <span className='font-medium'> Material UI and Tailwind CSS, </span>
        and the
        <span className='font-medium'> TypeScript </span>
        language. I'm always on a quest to learn new techniques. I am currently
        looking for a full time position as a software developer.
      </p>

      <p>
        <span className='italic'>
          I currently live in Jersey City, New Jersey, United States.
        </span>{' '}
        When I'm not coding, I enjoy playing video games, playing musical
        instruments, listening to music, and visiting art galleries and museums.
      </p>
    </motion.section>
  );
}
