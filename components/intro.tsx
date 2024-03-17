'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id='home'
      className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.01,
            }}
          > */}
            <Image
              src='/me2.png'
              alt='Photo of Hongzhi'
              width='100'
              height='100'
              loading='eager'
              priority={true}
              className='h-44 w-44 bg-blue-900 rounded-full object-cover border-[0.35rem] border-white shadow-2xl shadow-blue-700/40 dark:shadow-blue-700/50'
            />
          {/* </motion.div> */}
        </div>
      </div>

      <motion.div
        className='mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-[40px]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className='flex flex-col items-center justify-center px-2 font-heading select-none'>
          <span>Hi, I'm Hongzhi (Ethan), </span>
          <div>
            <span className='font-bold'>a full-stack engineer</span>
            <span className='font-bold'> with many hobbies like</span>
          </div>
          <div>
            <span className='font-bold'>coding, music and art.</span>

            <span className='font-bold'> My recent focus is</span>
          </div>
          <span className='underline font-bold'>Next.js + Tailwind CSS.</span>
        </div>
      </motion.div>

      {/* <motion.div
        className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href='#contact'
          className='w-[18.2rem] border sm:w-auto bg-foreground text-background px-7 py-3 flex items-center justify-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition'
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
          title='Contact me'
          aria-label='Contact me'
        >
          Contact Me <BsArrowRight />
        </Link>

        <a
          className='w-[18.2rem] border sm:w-auto bg-background text-foreground px-7 py-3 flex items-center justify-center gap-2 rounded-lg outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer'
          href='/Hongzhi_Zhao_Resume.pdf'
          download
          title='Download Resume'
          aria-label='Download Resume'
        >
          Download Resume <HiDownload />
        </a>

        <div className='flex flex-row gap-4'>
          <a
            className='sm:h-[3.4rem] sm:w-[3.4rem] border bg-background py-[12px] px-[20px] sm:p-4 text-foreground flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer'
            href='https://www.linkedin.com/in/ethan-zhao-631987211/'
            target='_blank'
            title='LinkedIn'
            aria-label='LinkedIn'
          >
            <p className='inline-block sm:hidden'>LinkedIn</p>
            <BsLinkedin className='text-xl' />
          </a>

          <a
            className='sm:h-[3.4rem] sm:w-[3.4rem] border bg-background py-[12px] px-[20px] sm:p-4  text-foreground flex items-center gap-2 rounded-lg focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer'
            href='https://github.com/oberonbot '
            target='_blank'
            title='Github'
            aria-label='Github'
          >
            <p className='inline-block sm:hidden'>Github</p>
            <FaGithubSquare className='text-2xl' />
          </a>
        </div>
      </motion.div> */}
    </section>
  );
}
