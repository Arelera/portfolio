import SectionHeader from '../SectionHeader/SectionHeader';
import Project from './Project';

export default function Projects({ projects }) {
  return (
    <section id="projects">
      <SectionHeader title="PROJECTS" />
      {projects.map((proj, i) => (
        <Project project={proj} key={i} />
      ))}
    </section>
  );
}
