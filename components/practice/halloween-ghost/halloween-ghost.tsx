'use client';
import React, { useEffect, useState } from 'react';
import './halloween-ghost.css';
import { motion } from 'framer-motion';

const HalloweenGhost = () => {
  // const [ghostX, setGhostX] = useState(0);
  // const [ghostY, setGhostY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  // const handleMouseMove = (event: React.MouseEvent) => {
  //   setIsActive(true);

  //   // Get the X and Y coordinates of the mouse pointer
  //   const pageX = event.pageX;
  //   const pageY = event.pageY;

  //   followCursor(pageX, pageY);
  // };

  // const followCursor = (pageX: number, pageY: number) => {
  //   // Calculate the difference between current and previous position
  //   const diffX = pageX - ghostX - 850;
  //   const diffY = pageY - ghostY - 300;
  //   const skewX = diffX / 16;
  //   const scale = diffY / 16;

  //   // Update ghost position by moving it closer to the mouse pointer
  //   setGhostX(ghostX + diffX / 8);
  //   setGhostY(ghostY + diffY / 8);

  //   // Calculate skew and scale values based on mouse movement
  //   const skewDegrees = countShift(skewX, 0, 50, 0, -25);
  //   const scaleYValue = countShift(scale, 0, 50, 1, 2.0);

  //   const transformStyle = `translate(${ghostX}px, ${ghostY}px) skew(${skewDegrees}deg) rotate(${-skewDegrees}deg) scaleY(${scaleYValue})`;

  //   // Apply the transform style to the ghost element
  //   const ghostElement = document.getElementById('ghost');
  //   if (ghostElement) {
  //     ghostElement.style.transform = transformStyle;
  //   }
  // };

  // const countShift = (
  //   value: number,
  //   inMin: number,
  //   inMax: number,
  //   outMin: number,
  //   outMax: number
  // ) => ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  // const handleMouseLeave = () => {
  //   setIsActive(false);

  //   // Optionally, reset the animation here
  //   const ghostElement = document.getElementById('ghost');
  //   if (ghostElement) {
  //     ghostElement.style.animation = 'none';
  //   }
  // };

  return (
    <div className='w-full flex flex-col gap-16'>
      <div className='flex flex-col items-center select-none h-[200px] '>
        <motion.div
          id='ghost'
          className={isActive ? 'active' : ''}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag
          dragConstraints={{ left: -400, right: 400, top: -50, bottom: 50 }}
          dragElastic
          dragMomentum
          dragTransition={{ bounceStiffness: 200, bounceDamping: 10 }}
        >
          <div className='ghost'>
            <div className='ghost__eyes'>
              <div className='ghost__eyes_eye'></div>
              <div className='ghost__eyes_eye'></div>
            </div>
            <div className='ghost__mouth'></div>
            <div className='ghost__waves'>
              <div className='ghost__wave'></div>
              <div className='ghost__wave'></div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* <div className='flex flex-col gap-5'>
        <h1 className='text-3xl font-heading select-none'>Description</h1>
        <p></p>
      </div> */}
    </div>
  );
};

export default HalloweenGhost;
