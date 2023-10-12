'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Icons } from './icons';
import { Button } from './ui/button';
import MenuButton from './ui/menu-button';
import Drawer from './ui/drawer';
import { ModeToggle } from './mode-toggle';
const items = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'Photography',
    href: '/photography',
  },
  {
    title: 'UI-Dojo',
    href: '/ui-dojo',
  },
  {
    title: 'Projects',
    href: '/project',
  },
];

const NavBar = () => {
  // const { palette, setPalette } = usePalette();

  // const changePalette = (newPalette: Palette) => {
  //   setPalette(newPalette);
  // };

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
        className={`absolute top-0 z-10  w-full ${
          isDrawerOpen ? 'h-full bg-background/80 backdrop-blur-[0.3rem]' : ''
        } transition-all duration-500 `}
      ></div>
      <div className='z-[900] fixed flex top-0 w-full px-5 sm:px-6 lg:px-28 xl:px-44 h-12 justify-between items-center bg-background/80 backdrop-blur-[0.6rem]'>
        {/* Logo and Title */}
        <div className='hidden md:flex items-center gap-12'>
          <Link href='/' className='items-center space-x-2 flex'>
            <Icons.binary />
            <span className='font-bold inline-block'>Hongzhi.Zhao</span>
          </Link>
          <nav className='gap-6 flex'>
            {items?.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className=' flex items-center text-lg font-medium transition-colors text-foreground/60 hover:text-foreground/80 sm:text-sm'
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex items-center justify-center gap-2 sm:gap-4 text-foreground/100 '>
          {/* <Button variant={'ghost'} size={'sm'} className='h-8 w-8 px-0'>
            <Icons.palette size={20} />
          </Button> */}
          <ModeToggle />
          <Button
            variant={'ghost'}
            size={'sm'}
            className='h-8 w-8 px-0 text-foreground/100'
            title='languages'
            aria-label='languages'
          >
            <Icons.languages size={22} />
          </Button>
        </div>

        <MenuButton
          isDrawerOpen={isDrawerOpen}
          onClick={openDrawer}
        ></MenuButton>

        <Drawer
          isDrawerOpen={isDrawerOpen}
          closeDrawer={closeDrawer}
          items={items}
        />
      </div>
    </>
  );
};

export default NavBar;
