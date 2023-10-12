'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from 'next-themes';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.25);
  const { theme } = useTheme();

  return (
    <section id='experience' ref={ref} className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor='gray'>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: 'rgba(226, 232, 240, 0.1)',
                boxShadow:
                  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '0.5rem',
                textAlign: 'left',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #94a3b8',
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                color: '#1e293b',
                background: '#9faab9',
                fontSize: '1.5rem',
              }}
            >
              <h3 className='font-semibold capitalize text-foreground'>
                {item.title}
              </h3>
              <p className='font-normal !mt-0'>{item.location}</p>
              {item.description.map((desc, index) => (
                <p key={index} className='!mt-1 !font-light text-foreground'>
                  {desc}
                </p>
              ))}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
