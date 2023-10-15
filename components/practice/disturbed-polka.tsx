'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Link from '../ui/link';

const DynamicComponentWithNoSSR = dynamic(() => import('./polka-p5'), {
  ssr: false,
});

const DisturbedPolka = () => {
  return (
    <div className='w-full flex flex-col gap-16'>
      <div className='flex flex-col items-center select-none'>
        <DynamicComponentWithNoSSR />
      </div>
      <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-heading select-none'>Description</h1>
        <p>
          First of all, this is exactly a copy of{' '}
          <Link href='https://codepen.io/vinzdef/pen/QNbMvq'>
            what Vincent De Feo has made.
          </Link>{' '}
          But I have always wanted to make a UI interaction like this, where the
          pattern changes with move of the mouse pointer. I understand that this
          requires calculating the distance between each position and the
          pointer, but I don't know how to implement it specifically. I'm happy
          to say that now I know one of the implementations:{' '}
          <Link href='https://p5js.org/'>P5.js</Link>. P5.js is a JavaScript
          library for creative coding. But it uses vanilla JavaScript, and
          making it to work with React.js as well as Next.js is a new problem.
          <br />
          <br />
          If you want to use components in React.js, you can use{' '}
          <Link href='https://www.npmjs.com/package/react-p5-wrapper'>
            react-p5-wrapper.
          </Link>{' '}
          What I referred to before was{' '}
          <Link href='https://www.npmjs.com/package/react-p5'>react-p5</Link>,
          however I scrolled down so desperately that I didn't notice that
          react-p5 has been deprecated not long ago...
          <br />
          <br />
          If you use Next.js, you will encounter this error:{' '}
          <Link
            href='https://stackoverflow.com/questions/69560127/p5js-with-next-js-window-is-not-defined-even-in-useeffect'
            className='text-red-600 dark:text-red-700'
          >
            window is not defined.
          </Link>{' '}
          This is because we need to dynamically load our component on the
          client side in order to obtain the window.
          <br />
          <br />
          Next, I encountered the problem of making the canvas adaptive to the
          size of the parent component. I obtained the parent node using id, and
          used the{' '}
          <Link href='https://p5js.org/reference/#/p5/windowResized'>
            windowResized()
          </Link>{' '}
          and{' '}
          <Link href='https://p5js.org/reference/#/p5/resizeCanvas'>
            resizeCanvas()
          </Link>{' '}
          methods of p5 to finally implement the responsive design of the
          canvas.
          <br />
          <br />
          Finally I started playing with the parameters. I changed the size of
          the 'effect range' by adding an addedDistance to the calculated
          distance between the dot and the pointer, I 'faked' the dot's true
          distance from the pointer thus affected its render behavior. At the
          same time, I also learned how to use{' '}
          <Link href='https://p5js.org/reference/#/p5/noise'>p5.noise()</Link>
          (you can see that the dots in the pattern are disturbed, which looks
          very cool!)
          <br />
          <br />
          All in all, I spent most of the day on this UI practice, just
          transplanted Vicent's code though, but I benefited a lot from this.
        </p>
      </div>
    </div>
  );
};

export default DisturbedPolka;
