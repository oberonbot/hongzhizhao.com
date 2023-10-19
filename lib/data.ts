import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import projectGallery from '@/public/project-gallery2.jpg';
import projectBigbrain from '@/public/project-bigbrain5.jpg';
import projectBlog from '@/public/project-blog2.jpg';
import TiltCard from '@/components/practice/tilt-card';
import DisturbedPolka from '@/components/practice/disturbed-polka';
import Typography from '@/components/practice/typograhy';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'SamaritanScout.org',
    location: 'Front-End Software Developer Intern, remote',
    description: [
      '- I collaborated in Agile/Scrum environment using Jira and Git.',
      '- I crafted essential components such as navigation bar and footer using React and Material UI.',
      '- I teamed up with UI/UX designer to establish consistent theming for a unified website appearance.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: 'Jul 2023 - Present',
  },
  {
    title: 'Stevens Institute of Technology',
    location: 'Hoboken, NJ, United States',
    description: [
      '- In my first year, I learned in the field of machine learning and deep learning, the courses were excellent and I learned the edge-cutting Transformer, BERT, etc.',

      '- In the second year, I dedicated to Web Development, which is also an area I have always been interested in, where I can build anything however I want. ',
    ],
    icon: React.createElement(LuGraduationCap),
    date: 'Sept 2021 - May 2023',
  },
  {
    title: 'Beichende Technology Co., Ltd.',
    location: 'Full-Stack Web Developer Intern, Shenzhen, China',
    description: [
      '- I worked on a team of 5 developers for 4 months, used Element UI, Vue.js, Spring Boot and Oracle database to develop a client info management system.',
      '- I corresponded with bank counterparts to refine a testing framework using JUnit and Postman.',
    ],
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2021 - Apr 2021',
  },
  {
    title: 'North China Electric Power University',
    location: 'Beijing, China',
    description: [
      '- From mathematics, physics, and then computer hardware knowledge, to C, data structure & algos, SQL, Java, Agile Development, UI/UX design and web development, I learned a lot.',
      '- At the same time I was actively involved in campus life, I learned how to make posters and videos with PS and PR, and I also joined the choir and badminton club.',
    ],
    icon: React.createElement(LuGraduationCap),
    date: 'Sept 2017 - May 2021',
  },
] as const;

export const projectsData = [
  {
    title: 'Online Art Gallery',
    description:
      'An online art gallery having a masonry layout, with many popular components like creatable multi-select input, hover effects, file drag and drop, etc. Deployed on AWS.',
    tags: ['Material UI', 'React.js', 'Node.js', 'MongoDB', 'AWS'],
    imageUrl: projectGallery,
  },
  {
    title: 'CogniParty',
    description:
      'A party quiz app similar to Kahoot, where users can easily create, edit customized quizzes, and invite others to play, with score tracking and leaderboard.',
    tags: ['React.js', 'Material UI', 'Component Testing'],
    imageUrl: projectBigbrain,
  },
  {
    title: 'SmooScribe',
    description:
      'A functional blog app with a simple and elegant design that has easy-to-use editor, image upload and blog categorization.',
    tags: ['React.js', 'SASS', 'Node.js', 'MongoDB'],
    imageUrl: projectBlog,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'SQL',
  'React.js',
  'Vue.js',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Material UI',
  'Bootstrap',
  'Git',
  'Linux',
  'Agile/Scrum',
] as const;

export const photographyData = [
  {
    place: ['Bird Rock', 'California'],
    time: 'Summer 2022',
    filename: 'california.jpeg',
  },
  {
    place: ['Capital Building', 'Washington DC'],
    time: 'Spring 2023',
    filename: 'capital.jpeg',
  },
  {
    place: ['Cathedral Basilica of the Secred Heart', 'New Jersey'],
    time: 'Spring 2023',
    filename: 'cathedral-basilica-secred-heart.jpeg',
  },

  {
    place: ['Cathedral Basilica of the Secred Heart', 'New Jersey'],
    time: 'Spring 2023',
    filename: 'cathedral-basilica-secred-heart2.jpeg',
  },
  {
    place: ['Chrysler Building', 'NYC'],
    time: '2023',
    filename: 'chrysler-building.jpeg',
  },
  {
    place: ['Highway in Cupertino', 'California'],
    time: 'Summer 2022',
    filename: 'cupertino-highway.jpeg',
  },
  {
    place: ['Subway station', 'Washington DC'],
    time: 'Summer 2023',
    filename: 'DC-subway.jpeg',
  },
  {
    place: ['Union Station', 'Washington DC'],
    time: 'Summer 2022',
    filename: 'DC-terminal.jpeg',
  },
  {
    place: ['Washington Monument', 'Washington DC'],
    time: 'Spring 2023',
    filename: 'DC.jpeg',
  },
  {
    place: ['Washington Monument', 'Washington DC'],
    time: 'Spring 2023',
    filename: 'DC2.jpeg',
  },
  {
    place: ['Empire State Building', 'NYC'],
    time: 'Spring 2023',
    filename: 'ESB.jpeg',
  },
  {
    place: ['NYC'],
    time: 'Spring 2023',
    filename: 'grand-central-terminal.jpeg',
  },
  {
    place: ['Lombard Street', 'San Francisco'],
    time: 'Summer 2022',
    filename: 'lombard-st.jpeg',
  },
  {
    place: ['Miami', 'Florida'],
    time: 'Fall 2022',
    filename: 'miami.jpeg',
  },
  {
    place: ['MOMA', 'NYC'],
    time: 'Fall 2021',
    filename: 'moma.jpeg',
  },
  {
    place: ['National Gallery of Art', 'Washington DC'],
    time: 'Spring 2023',
    filename: 'national-gallery-of-art.jpeg',
  },
  {
    place: ['National Gallery of Art', 'Washington DC'],
    time: 'Spring 2023',
    filename: 'national-gallery-of-art2.jpeg',
  },
  {
    place: ['Newark', 'New Jersey'],
    time: 'Spring 2023',
    filename: 'newark-blossom.jpeg',
  },
  {
    place: ['Subway in NYC'],
    time: 'Fall 2021',
    filename: 'nyc-subway.jpeg',
  },
  {
    place: ['Somewhere in NYC'],
    time: 'Sometime',
    filename: 'nyc.jpeg',
  },
  {
    place: ['Downtown', 'San Francisco'],
    time: 'Summer 2022',
    filename: 'rainbow-flag.jpeg',
  },
  {
    place: ['Capital Building', 'Washington DC'],
    time: 'Spring 2023',
    filename: 'rotunda.jpeg',
  },
  {
    place: ['Capital Building', 'Washington DC'],
    time: 'Spring 2023',
    filename: 'rotunda2.jpeg',
  },
  {
    place: ['Capital Building', 'Washington DC'],
    time: 'Spring 2023',
    filename: 'rotunda3.jpeg',
  },
  {
    place: ['Santa Clara University', 'San Jose'],
    time: 'Summer 2022',
    filename: 'SCU.jpeg',
  },
  {
    place: ['Downtown', 'San Francisco'],
    time: 'Summer 2022',
    filename: 'SF-downtown.jpeg',
  },
  {
    place: ['Downtown', 'San Francisco'],
    time: 'Summer 2022',
    filename: 'SF-downtown3.jpeg',
  },
  {
    place: ['Stevens Institute of Technology', 'New Jersey'],
    time: 'Fall 2021',
    filename: 'SIT.jpeg',
  },
  {
    place: ['World Trade Center', 'NYC'],
    time: 'Sometime',
    filename: 'wtc.jpeg',
  },
  {
    place: ['Intrepid Sea, Air & Space Museum', 'NYC'],
    time: 'Winter 2022',
    filename: 'intrepid2.jpeg',
  },
  {
    place: ['Intrepid Sea, Air & Space Museum', 'NYC'],
    time: 'Winter 2022',
    filename: 'intrepid.jpeg',
  },
  {
    place: ['Statue of Liberty', 'NYC'],
    time: 'Spring 2023',
    filename: 'statue_of_liberty.jpeg',
  },
  {
    place: ['NYC'],
    time: 'Spring 2023',
    filename: 'nyc2.jpeg',
  },
  {
    place: ['Carnegie Hall', 'NYC'],
    time: 'Winter 2022',
    filename: 'carnegie_hall.jpeg',
  },
  {
    place: ['Coney Island', 'NYC'],
    time: 'Summer 2023',
    filename: 'coney_island.jpeg',
  },
];

export const componentData = [
  [
    {
      title: 'Typography',
      subtitle: 'With animated gradient background',
      time: '10/19/2023',
      id: '2',
      videoUrl: 'typography.gif',
      content: React.createElement(Typography),
    },
  ],
  [
    {
      title: 'Disturbed Polka',
      time: '10/13/2023',
      id: '1',
      videoUrl: 'disturbed-polka.gif',
      content: React.createElement(DisturbedPolka),
    },
  ],
  [
    {
      title: 'Tilt Card',
      time: '09/25/2023',
      id: '0',
      videoUrl: 'tilt-card.gif',
      content: React.createElement(TiltCard),
    },
  ],
];
