import ProjectBig from '../../components/ProjectBig/ProjectBig';
import { getAllProjectsIds, getProjectData } from '../../lib/projects';

export default function ProjectPage({ project }) {
  return (
    <>
      <ProjectBig project={project.fileData} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const project = getProjectData(id);
  return {
    props: {
      project,
    },
  };
}
