'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import Link from '../ui/small-link';

const TiltCard = () => {
  return (
    <div className='w-full flex flex-col gap-16'>
      <div className='flex flex-col items-center select-none'>
        <Tilt
          className='w-[200px] h-[300px] rounded-xl bg-yosemite bg-cover transform-style-3d shadow-2xl shadow-gray-800 dark:shadow-gray-400/50 touch-none'
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          glareEnable
          glarePosition='all'
          glareMaxOpacity={0.5}
          gyroscope
          glareBorderRadius='12px'
        >
          <div className='w-full flex flex-col bottom-10 absolute translate-z-2 text-white items-center'>
            <h1 className='text-4xl font-heading select-none'>Yosemite</h1>
          </div>
        </Tilt>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-heading select-none'>Description</h1>
        <p>
          I'm fascinated by many details of the Apple TV UI, including a
          tiltable card, which looks amazing on the TV screen and it allows you
          to tilt it using the remote's trackpad. There are currently many
          resources on the Internet such as{' '}
          <Link href='https://github.com/micku7zu/vanilla-tilt.js'>
            vanilla-tilt.js
          </Link>
          , <Link href='http://gijsroge.github.io/tilt.js/'>tilt.js</Link>,{' '}
          <Link href='https://atroposjs.com/'>Atropos</Link>, and{' '}
          <Link href='https://github.com/mkosir/react-parallax-tilt'>
            react-parallax-tilt
          </Link>
          , which is what I use. For me, its usage examples use React components
          and are very intuitive. If you use React + Tailwind CSS, I think{' '}
          <Link href='https://github.com/mkosir/react-parallax-tilt'>
            react-parallax-tilt
          </Link>{' '}
          is more friendly.
          <br />
          <br />
          In specific use, when I wanted to use the parallax feature, that is,
          when there are multiple layers of tags on the z-axis, I encountered a
          problem: Tailwind CSS does not have transform-style: preserve 3d,
          which means that Tailwind CSS itself can only perform x-axis and y
          axis of translation. At this point we can use{' '}
          <Link href='https://github.com/sambauers/tailwindcss-3d'>
            tailwindcss-3d
          </Link>
          . After simply installing and importing the plugin, we can achieve the
          parallax effect of multi-layer tags.
        </p>
      </div>
    </div>
  );
};

export default TiltCard;
