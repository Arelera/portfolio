import Head from 'next/head';

import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import useScroll from '../hooks/useScroll';

export default function Home() {
  const [projectsRef, scrollToProjects] = useScroll();
  const [skillsRef, scrollToSkills] = useScroll();
  const [contactRef, scrollToContact] = useScroll();

  return (
    <div>
      <Head>
        <title>Arel Portfolio</title>
      </Head>
      <Header
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} projects={projects} />
      <Contact contactRef={contactRef} />
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
      'Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore on ullamco laboris nisi ut',
    ],
    images: [],
    githubLink: '#',
    demoLink: '#heroku',
    textTheme: 'dark',
    color: 'E7F9A9',
    waveNum: 0,
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
    waveNum: 4,
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
    waveNum: 3,
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
