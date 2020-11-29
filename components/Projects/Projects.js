import SectionHeader from '../SectionHeader/SectionHeader';
import Project from './Project';

export default function Projects({ projects, projectsRef }) {
  return (
    <section ref={projectsRef}>
      <SectionHeader title="PROJECTS" />
      {projects.map((proj) => (
        <Project id={proj.id} project={proj.project} key={proj.id} />
      ))}
    </section>
  );
}
