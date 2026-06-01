'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import MenuButton from './menu-button';
import Drawer from './drawer';
import { ModeToggle } from './mode-toggle';
import PalettePicker from './palette-picker';
import { paths } from '@/lib/data';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      {/* The blur layer */}
      <div
        className={`absolute top-0 z-10 w-full ${
          isDrawerOpen ? 'h-full bg-background/70 backdrop-blur-[0.3rem]' : ''
        } transition-all duration-500 `}
      ></div>
      <div className='z-[900] fixed flex top-0 w-full px-5 sm:px-6 lg:px-10 h-14 justify-between items-center bg-background/25 backdrop-blur-md'>
        {/* Logo and Title */}
        <div className='hidden md:flex items-center gap-12'>
          <Link href='/' className='items-center flex'>
            <span className='font-mono text-[11px] uppercase tracking-[0.22em] text-foreground/70'>
              Hongzhi Zhao
            </span>
          </Link>
          <nav className='gap-7 flex font-mono text-[11px] uppercase tracking-[0.18em]'>
            {paths?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className='flex items-center transition-colors text-foreground/45 hover:text-foreground/80'
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex items-center justify-center gap-2 sm:gap-4 text-foreground/100 '>
          <PalettePicker />
          <ModeToggle />
          {/* <Button
            variant={'ghost'}
            size={'sm'}
            className='h-8 w-8 px-0 text-foreground/100'
            title='languages'
            aria-label='languages'
          >
            <Icons.languages size={22} />
          </Button> */}
        </div>

        <MenuButton
          isDrawerOpen={isDrawerOpen}
          onClick={openDrawer}
        ></MenuButton>

        <Drawer
          isDrawerOpen={isDrawerOpen}
          closeDrawer={closeDrawer}
        />
      </div>
    </>
  );
};

export default NavBar;
