import Head from 'next/head';

import Header from '../components/Header/Header';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import useScroll from '../hooks/useScroll';
import { getProjectsData } from '../lib/projects';

export default function Home({ allProjectsData }) {
  const [projectsRef, scrollToProjects] = useScroll();
  const [skillsRef, scrollToSkills] = useScroll();
  const [, scrollToTop] = useScroll();

  return (
    <div>
      <Head>
        <title>Arel Alkım Yurtsevenler</title>
        <meta
          name="description"
          content="Arel Alkım Yurtsevenler, web developer portfolio."
        />
        <meta name="robots" content="noindex" />
      </Head>
      <Header
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToTop={scrollToTop}
      />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} projects={allProjectsData} />
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
