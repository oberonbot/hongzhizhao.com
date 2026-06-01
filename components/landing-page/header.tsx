'use client';

import React, { useContext } from 'react';
// import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { ActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useContext(ActiveSectionContext)!;

  return (
    <div className='hidden z-[900] relative sm:inline-block'>
      <div
        className='fixed left-1/2 -translate-x-[50%] border border-foreground/10 bg-background/35 shadow-sm shadow-foreground/[0.03] backdrop-blur-md top-[4.35rem] h-[2.55rem] w-[25rem] rounded-full'
        // initial={{ y: -100, x: '-50%', opacity: 0 }}
        // animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></div>

      <nav className='flex fixed left-1/2 -translate-x-1/2 top-[4.1rem] h-[initial] '>
        <ul className='flex items-center justify-center gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/55 w-[initial] flex-nowrap gap-1'>
          {links.map((link) => (
            <li
              className='h-2/3 flex items-center justify-center relative'
              key={link.hash}
              // initial={{ y: -100, opacity: 0 }}
              // animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  'relative flex w-full items-center justify-center px-3 py-3 transition hover:text-foreground',
                  {
                    'text-foreground':
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
                  <span
                    className='absolute bottom-2 left-1/2 h-px w-5 -translate-x-1/2 bg-foreground/70'
                    // layoutId='activeSection'
                    // transition={{
                    //   type: 'spring',
                    //   stiffness: 380,
                    //   damping: 30,
                    // }}
                  ></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
