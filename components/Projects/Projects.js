import SectionHeader from '../SectionHeader/SectionHeader';
import Project from './Project';

export default function Projects({ projects, projectsRef }) {
  return (
    <section ref={projectsRef} id="projects">
      <SectionHeader title="PROJECTS" />
      {projects.map((proj, i) => (
        <Project project={proj} key={i} />
      ))}
    </section>
  );
}
