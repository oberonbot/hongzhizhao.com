import Header from '@/components/landing-page/header';
import Intro from '@/components/landing-page/intro';
import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Home',
  description:
    'A personal home for Hongzhi Zhao — images, notes, fragments, and art direction.',
};

const SectionDivider = dynamic(() => import('@/components/landing-page/section-divider'));
const About = dynamic(() => import('@/components/landing-page/about'));
const Contact = dynamic(() => import('@/components/landing-page/contact'));

export default function Home() {
  return (
    <div className='pt-24 sm:pt-28'>
      <main className='mx-auto flex w-full max-w-[1180px] flex-col px-5 sm:px-8 lg:px-10'>
        <Header />
        <Intro />
        <SectionDivider />
        <About />
        <Contact />
      </main>
    </div>
  );
}
