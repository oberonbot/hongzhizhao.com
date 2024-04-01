import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
type componentInfoProps = {
  title: string;
  time: string;
  videoUrl: string;
  id: string;
  content: React.ReactNode;
};
const DojoCard = ({ title, time, videoUrl, id }: componentInfoProps) => {
  return (
    <Link href={`/ui-dojo/${id}`}>
      <div className='relative rounded-xl'>
        {/* <video
          src={videoUrl}
          playsInline
          loop
          autoPlay
          className='rounded-xl'
        /> */}

        <Image
          src={`/images/ui-dojo/${videoUrl}`}
          alt={title}
          width={600}
          height={600}
          quality={50}
          loading='eager'
          className='w-full h-auto object-cover object-center rounded-xl'
        />
        <div className='absolute bottom-2 right-2 sm:bottom-4 sm:right-4 max-w-full bg-gray-800/20 backdrop-blur-md rounded-lg py-1 px-3 text-white text-sm md:text-base'>
          <p className='font-bold text-end'>{title}</p>
          <p className='font-normal text-end '>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default DojoCard;
