'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <section
      id='contact'
      ref={ref}
      className='grid scroll-mt-28 gap-8 py-16 pb-24 sm:py-24 lg:grid-cols-[220px_minmax(0,1fr)]'
    >
      <SectionHeading>Contact</SectionHeading>

      <div className='max-w-[760px]'>
        <h2 className='text-[clamp(2.5rem,7vw,6.6rem)] leading-[0.9] tracking-[-0.085em]'>
          Leave a note.
        </h2>
        <p className='mt-6 max-w-[500px] text-lg leading-7 text-foreground/60'>
          For anything that feels better as a message than a comment:{' '}
          <a className='border-b border-foreground/30' href='mailto:hongzhizhao98@gmail.com'>
            hongzhizhao98@gmail.com
          </a>
        </p>

        <form
          className='mt-12 flex flex-col gap-4'
          // @ts-ignore
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success('Email sent successfully!');
          }}
        >
          <input
            className='h-14 border-b border-foreground/20 bg-transparent px-0 text-lg outline-none transition placeholder:text-foreground/35 focus:border-foreground/70'
            name='senderEmail'
            type='email'
            required
            maxLength={500}
            placeholder='Your email'
          />
          <textarea
            className='h-44 resize-none border-b border-foreground/20 bg-transparent px-0 py-4 text-lg outline-none transition placeholder:text-foreground/35 focus:border-foreground/70'
            name='message'
            placeholder='Your message'
            required
            maxLength={5000}
          />
          <SubmitBtn />
        </form>
      </div>
    </section>
  );
}
