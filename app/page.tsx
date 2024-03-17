import Header from '@/components/header';
import Intro from '@/components/intro';
import React, { lazy } from 'react';

export const metadata = {
  title: 'Home',
  description:
    'This is the home page. Including introduction, links, projects, skills and contacts of mine.',
};


const LazySectionDivider = lazy(() => import('@/components/section-divider'));
const LazyAbout = lazy(() => import('@/components/about'));
const LazyProjects = lazy(() => import('@/components/projects'));
const LazySkills = lazy(() => import('@/components/skills'));
// const LazyExperience = lazy(() => import('@/components/experience'));
const LazyContact = lazy(() => import('@/components/contact'));

export default function Home() {
  return (
    <div className='pt-24 sm:pt-36'>
      <main className='flex flex-col items-center px-4'>
          <Header />
          <Intro />
          <LazySectionDivider />
          <LazyAbout /> 
          <LazyProjects />
          <LazySkills />
          {/* <LazyExperience /> */}
          <LazyContact />
      </main>
    </div>
  );
}
