import S from './Project.module.scss';
import GithubIcon from '../icons/GithubIcon';
import HerokuIcon from '../icons/HerokuIcon';
import VercelIcon from '../icons/VercelIcon';
import ArrowIcon from '../icons/ArrowIcon';
import waves from '../waves/waves';

export default function Project({ project }) {
  const Wave = waves[`Wave${project.waveNum}`];
  const iconColor = project.textTheme === 'light' ? 'eee' : '333';

  return (
    <div
      className={`${S.box1} ${S.box} ${
        project.textTheme === 'light' ? S.light : S.dark
      }`}
      style={{ background: `#${project.color}` }}
    >
      <Wave color={project.color} />
      <div className={S.imgBox}></div>

      <div className={S.info}>
        <div className={S.titles}>
          <h3 className={S.title}>{project.name}</h3>
          <h4 className={S.undertitle}>{project.type}</h4>
        </div>
        {project.description.map((desc, i) => (
          <p className={S.description} key={i}>
            {desc}
          </p>
        ))}

        <div className={S.links}>
          <div>
            <a className={S.linkIconS} href={project.githubLink}>
              <GithubIcon color={iconColor} />
            </a>
            <a className={S.linkIconS} href={project.demoLink}>
              {project.demoLink.includes('heroku') ? (
                <HerokuIcon color={iconColor} />
              ) : (
                <VercelIcon color={iconColor} />
              )}
              <p className={S.undertitle}>Live Demo</p>
            </a>
          </div>
          <a className={S.linkIconS} href="#">
            <ArrowIcon color={iconColor} />
          </a>
        </div>
      </div>

      {project.stack && <p className={S.stack}>{project.stack}</p>}
    </div>
  );
}
