'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

type PhotoInfo = {
  filename: string;
  place: [string, string];
  time: string;
};

const SmoothPhoto = ({ place, time, filename }: PhotoInfo) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const actualImageSrc = `/images/photography/${filename}`;

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {}, [actualImageSrc]);

  return (
    <div className='col-span-1 relative group'>
      {imageLoaded ? (
        <>
          <Image
            src={actualImageSrc}
            alt={filename}
            width={600}
            height={600}
            quality={70}
            loading='lazy'
            className={`w-full h-auto sm:h-[750px] object-cover object-center`}
          />

          <div className='absolute bottom-2 right-2 sm:bottom-4 sm:right-4 max-w-full bg-gray-800/20 backdrop-blur-md rounded-xl py-1 px-3 text-white text-sm md:text-base opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
            <p className='font-bold text-end'>{place[0]}</p>
            <p className='font-bold text-end'>{place[1]}</p>
            <p className='font-normal text-end'>{time}</p>
          </div>
        </>
      ) : (
        <>
          <Image
            src={`/images/photography/blur/${filename}`}
            alt='Placeholder'
            width={600}
            height={600}
            quality={70}
            loading='lazy'
            className='w-full h-auto sm:h-[750px] object-cover object-center'
            onLoad={() => handleImageLoad()}
          />
          <div className='absolute top-0 left-0 w-full h-full backdrop-blur-2xl'></div>
        </>
      )}
    </div>
  );
};

export default SmoothPhoto;
