import React, { useState } from 'react';

interface MenuButtonProps {
  onClick: () => void;
  isDrawerOpen: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onClick, isDrawerOpen }) => {
  return (
    <button
      className='w-[20px] h-[20px] flex items-center md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background'
      onClick={onClick}
      title='menu'
      aria-label='menu'
    >
      <div className='w-[20px] h-[20px] flex flex-col gap-[7px]'>
        <div
          className={`w-[20px] h-[2px] bg-foreground rounded-full transition-all duration-500 ${
            isDrawerOpen
              ? 'translate-y-[9px] -translate-x-[3px] rotate-45 w-[26px]'
              : ''
          }`}
        ></div>
        <div
          className={`w-[20px] h-[2px] bg-foreground rounded-full transition-all duration-500 ${
            isDrawerOpen ? 'scale-0' : ''
          }`}
        ></div>
        <div
          className={`w-[20px] h-[2px] bg-foreground rounded-full transition-all duration-500 ${
            isDrawerOpen
              ? '-rotate-45 -translate-x-[3px] -translate-y-[9px] w-[26px]'
              : ''
          }`}
        ></div>
      </div>
    </button>
  );
};

export default MenuButton;
