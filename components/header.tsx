'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <div className='hidden z-[900] relative sm:inline-block'>
      <motion.div
        className='fixed left-1/2 border border-foreground-100/40 bg-background/80 shadow-lg shadow-foreground/[0.05] backdrop-blur-[0.5rem] top-[4.2rem] h-[2.6rem] w-[30.8rem] rounded-lg'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>

      <nav className='flex fixed left-1/2 -translate-x-1/2 top-[4.1rem] h-[initial] '>
        <ul className='flex items-center justify-center gap-y-1 text-sm font-medium text-gray-500 w-[initial] flex-nowrap gap-2'>
          {links.map((link) => (
            <motion.li
              className='h-2/3 flex items-center justify-center relative'
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-400 dark:hover:text-gray-200',
                  {
                    'text-gray-950 dark:text-gray-200':
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className='bg-slate-200 dark:bg-slate-700 rounded-md absolute inset-0 -z-10'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
