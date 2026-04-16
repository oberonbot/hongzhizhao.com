import Header from '@/components/landing-page/header';
import Intro from '@/components/landing-page/intro';
import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Home',
  description:
    'This is the home page. Including introduction, links, projects, skills and contacts of mine.',
};

const SectionDivider = dynamic(() => import('@/components/landing-page/section-divider'));
const About = dynamic(() => import('@/components/landing-page/about'));
const Projects = dynamic(() => import('@/components/landing-page/projects'));
const Skills = dynamic(() => import('@/components/landing-page/skills'));
const Contact = dynamic(() => import('@/components/landing-page/contact'));

export default function Home() {
  return (
    <div className='pt-24 sm:pt-36'>
      <main className='flex flex-col items-center px-4'>
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
