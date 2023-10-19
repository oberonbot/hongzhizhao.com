'use client';
import React from 'react';
import Link from '../ui/link';
import CodeSnippet from '../code-snippet';
import Image from 'next/image';
import Code from '../ui/code';

const Typography = () => {
  const code1 = `
    // set in tailwind.config.js
    'gradient-x': {
      '0%, 100%': {
        'background-size':'900% 100%',
        'background-position': 'left center'
      },
      '50%': {
          'background-size':'900% 100%',
          'background-position': 'right center'
      }
    }
  `;

  return (
    <div className='w-full flex flex-col gap-16'>
      <div className='flex flex-col items-center select-none'>
        <div className='py-5 text-8xl md:text-9xl font-heading flex items-center justify-center '>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500  via-amber-500  to-pink-500 animate-gradient-x'>
            Hello World
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-heading select-none'>Description</h1>
        <p>
          Inspired by{' '}
          <Link href='https://x.com/webflowtips/status/1712107734324150506?s=20'>
            a style made by Webflow
          </Link>
          . For this practice, it's so easy to implement the gradient backgound
          with the help of Tailwind CSS. But how to make it animate? I tried to
          animate the background position, but background position only, and it
          didn't move at all. What went wrong?
          <br />
          <br />
          If going to the documentation of{' '}
          <Link href='https://tailwindcss.com/docs/background-position'>
            Background Position on Tailwind CSS
          </Link>
          , we can notice that, if we want to modify the position of a
          background, having a background that's larger than our foreground, is
          the whole point. Thus we need to not only set the background position
          from left to right, but also the background size to be larger than its
          original size, like this:
        </p>
        <CodeSnippet code={code1} language='json' />
        <p>
          If we want the background to move only horizontally, then we don't
          need to 'stretch' the height of the backgrounud but to stretch the
          width, since I want the 3 colors to be displayed fully, so I stretched
          the width a lot.
        </p>
        <div className='flex flex-col items-center'>
          <Image
            src={'/images/ui-dojo/practice-illustrations/typography.jpg'}
            alt={
              'Two texts, the above is a text with dot line arounded as background, it has 3 colors, the middle is an arrow pointing below, the text at bottom is still the same text, but with tripple length of the background, thus the 3 colors are widened as well'
            }
            width={600}
            height={600}
            quality={50}
            priority
            className='w-full sm:w-2/3 h-auto object-cover object-center rounded-xl py-5'
          />
        </div>
        <div>
          For animation, just define one like this:{' '}
          <Code>gradient-x 8s linear infinite</Code>, and it's done.
        </div>
      </div>
    </div>
  );
};

export default Typography;
