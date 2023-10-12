import About from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Header from '@/components/header';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import React from 'react';

export const metadata = {
  title: 'Home',
  description:
    'This is the home page. Including introduction, links, projects, skills and contacts of mine.',
};

export default function Home() {
  return (
    <div className='pt-24 sm:pt-36'>
      {/* <div className='bg-[#FCC89B]/30 absolute top-[6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#FCC89B]/30'></div>
      <div className='bg-[#FF5FA2]/20 absolute top-[1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#FF5FA2]/20'></div> */}

      <main className='flex flex-col items-center px-4'>
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
