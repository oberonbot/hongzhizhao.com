import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 font-mono text-[11px] font-normal uppercase tracking-[0.22em] text-foreground/50">
      {children}
    </h2>
  );
}
