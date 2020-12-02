import fs from 'fs';
import path from 'path';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((name) => {
    return {
      params: {
        id: name.replace(/\.json$/, ''),
      },
    };
  });
}

export function getProjectsData() {
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.json$/, '');

    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const fileData = JSON.parse(fileContents);

    return { id, project: fileData };
  });

  return allProjectsData.sort((a, b) => a.project.order - b.project.order);
}

export function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath);
  const fileData = JSON.parse(fileContents);

  return {
    id,
    fileData,
  };
}
