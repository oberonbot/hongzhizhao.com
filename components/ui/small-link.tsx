import React from 'react';

type LinkProps = {
  href: string;
  children: React.ReactNode;
};
const Link = ({ href, children }: LinkProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='underline underline-offset-4'
    >
      {children}
    </a>
  );
};

export default Link;
