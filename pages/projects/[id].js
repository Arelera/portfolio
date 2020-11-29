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
  console.log({ paths });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const project = getProjectData(id);
  console.log({ project });
  return {
    props: {
      project,
    },
  };
}
