import React from 'react';
import { cn } from '@/lib/utils';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string | undefined;
}

const Link = ({ href, children, className }: LinkProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={cn(
        'underline underline-offset-[3px] font-semibold text-foreground/60',
        className
      )}
    >
      {children}
    </a>
  );
};

export default Link;
