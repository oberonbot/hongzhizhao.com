import { cn } from '@/lib/utils';
import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  className?: string | undefined;
}

const Code = ({ children, className }: LinkProps) => {
  return (
    <p
      className={cn(
        'inline font-semibold bg-foreground/10 rounded pt-[2px] pb-[4px] px-[8px] text-red-500',
        className
      )}
    >
      {children}
    </p>
  );
};

export default Code;
