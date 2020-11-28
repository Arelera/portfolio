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
  const [, scrollToTop] = useScroll();

  return (
    <div>
      <Head>
        <title>Arel Portfolio</title>
      </Head>
      <Header
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
        scrollToTop={scrollToTop}
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
    name: 'Portfolio',
    type: 'Personal Portfolio',
    description: [
      'This is my portfolio site where I list my skills, showcase and give information about my projects and have my contact information. Statically generated with NextJS',
    ],
    techs: ['NextJS'],
    images: ['proj-ss/port1.png'],
    githubLink: 'https://github.com/Arelera/portfolio',
    demoLink: 'https://portfolio-lemon-one.vercel.app/',
    color: 'A8D0DB',
    waveNum: 0,
  },
  {
    name: 'Wadap Store',
    type: 'E-Commerce App',
    description: [
      'An e-commerce app (without an actual payment system), where users register and login, create, edit, look at and delete their products and ratings/reviews.',
    ],
    techs: [
      'ReactJS',
      'React router',
      'Redux',
      'Sass',
      'Express',
      'PostgreSQL',
      'Pg',
      'RDS',
      'Jsonwebtoken',
      'Bcrypt',
    ],
    images: [
      'proj-ss/ecom1.png',
      'proj-ss/ecom2.png',
      'proj-ss/ecom3.png',
      'proj-ss/ecom4.png',
      'proj-ss/ecom5.png',
      ,
    ],
    githubLink: 'https://github.com/Arelera/ecommerce-app',
    demoLink: 'https://wadapstore.herokuapp.com/',
    textTheme: 'light',
    color: '2B4570',
    waveNum: 1,
  },

  {
    name: 'Neather',
    type: 'Weather App',
    description: [
      'A small weather app where users can search for a location by city or country name and see that locations current weather. Uses server-side rendering for the weather info page. Created with NextJS',
    ],
    techs: ['NextJS'],
    images: ['proj-ss/n1.png', 'proj-ss/n2.png', 'proj-ss/n3.png'],
    githubLink: 'https://github.com/Arelera/weather-app-nextjs',
    demoLink: 'https://weather-app-nextjs.vercel.app/',
    color: 'E49273',
    waveNum: 2,
  },
  {
    name: 'Polllo',
    type: 'Polling App',
    description: [
      'A polling app where users can create public/private polls, see all public polls on the home page, vote on their and others polls, and share the polls all without an account.',
    ],
    techs: [
      'ReactJS',
      'React router',
      'Styled Components',
      'Express',
      'PostgreSQL',
      'Pg',
      'RDS',
    ],
    images: [
      'proj-ss/poll1.png',
      'proj-ss/poll2.png',
      'proj-ss/poll3.png',
      'proj-ss/poll4.png',
    ],
    githubLink: 'https://github.com/Arelera/poll-app',
    demoLink: 'https://polllo.herokuapp.com/',
    color: 'EF476F',
    waveNum: 4,
  },
  {
    name: 'Todo App',
    type: 'Todo List App',
    description: [
      'A todo app where users can register and login, create projects where they can add the todos as they would like, mark them as complete or important, add descriptions or delete them.',
    ],
    techs: [
      'ReactJS',
      'Redux',
      'MongoDB',
      'Mongoose',
      'Jsonwebtoken',
      'Bcrypt',
    ],
    images: ['proj-ss/todo2.png', 'proj-ss/todo1.png'],
    githubLink: 'https://github.com/Arelera/todo-app',
    demoLink: 'https://todo-app0.herokuapp.com',
    color: 'D8A7CA',
    waveNum: 3,
  },
];
