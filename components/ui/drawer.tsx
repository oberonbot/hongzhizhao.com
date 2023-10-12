import React from 'react';
import MenuButton from './menu-button'; // Make sure to adjust the path accordingly
import Link from 'next/link'; // Assuming you're using Next.js

interface DrawerProps {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
  items?: { href: string; title: string }[];
}
const apprears = [
  'animate-appear-0',
  'animate-appear-1',
  'animate-appear-2',
  'animate-appear-3',
  'animate-appear-4',
];
const Drawer: React.FC<DrawerProps> = ({
  isDrawerOpen,
  closeDrawer,
  items,
}) => {
  return (
    <div
      className={`z-[999] fixed top-0 left-0 w-full h-0 overflow-hidden transition-all duration-500 ${
        isDrawerOpen ? 'h-screen' : ''
      }`}
    >
      <div className='w-full h-full shadow-lg bg-background'>
        <div className='flex justify-end pr-[20px] pt-[14px]'>
          <MenuButton
            isDrawerOpen={isDrawerOpen}
            onClick={closeDrawer}
          ></MenuButton>
        </div>
        <div className='px-12 pt-10'>
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`flex items-center py-2 text-2xl font-medium text-foreground ${
                isDrawerOpen ? apprears[index] : ''
              }`}
              onClick={closeDrawer}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
