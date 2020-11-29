import Head from 'next/head';

import Contact from '../components/Contact/Contact';
import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import useScroll from '../hooks/useScroll';
import { getProjectsData } from '../lib/projects';

export default function Home({ allProjectsData }) {
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
      <Projects projectsRef={projectsRef} projects={allProjectsData} />
      <Contact contactRef={contactRef} />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      allProjectsData: getProjectsData(),
    },
  };
}
