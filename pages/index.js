import Head from 'next/head';
import Header from '../components/Header/Header';
import Project from '../components/Projects/Project';
import Projects from '../components/Projects/Projects';

import SectionHeader from '../components/SectionHeader/SectionHeader';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arel Portfolio</title>
      </Head>
      <Header />
      <Projects projects={projects} />
      <section>
        <SectionHeader title="CONTACT" />
      </section>
    </div>
  );
}

// placeholder projects for now
const projects = [
  {
    name: 'Wadap DUdes',
    type: 'E-Commerce App',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
    ],
    images: [''],
    githubLink: '#',
    demoLink: '#heroku',
    // stack: 'pern',
    color: 'A8D0DB',
    waveNum: 1,
  },
  {
    name: 'Wadap DUdes',
    type: 'E-Commerce App',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
    ],
    images: [''],
    githubLink: '#',
    demoLink: '#heroku',
    // stack: 'pern',
    color: 'E49273',
    waveNum: 2,
  },
  {
    name: 'Wadap DUdes',
    type: 'E-Commerce App',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore, quis nostrud exercitation ullamco laboris nisi ut',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
    ],
    images: [''],
    githubLink: '#',
    demoLink: '#',
    // stack: 'mern',
    color: 'EF476F',
    waveNum: 3,
  },
  {
    name: 'Wadap DUdes',
    type: 'E-Commerce App',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
    ],
    images: [''],
    githubLink: '#',
    demoLink: '#',
    color: 'D8A7CA',
    waveNum: 4,
  },
  {
    name: 'Wadap DUdes',
    type: 'E-Commerce App',
    description: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut',
      'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
    ],
    images: [''],
    githubLink: '#',
    demoLink: '#heroku',
    textTheme: 'light',
    color: '2B4570',
    waveNum: 5,
  },
];
