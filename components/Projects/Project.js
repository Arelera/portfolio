import S from './Project.module.scss';
import Link from 'next/link';
import GithubIcon from '../icons/GithubIcon';
import Github2Icon from '../icons/Github2Icon';
import HerokuIcon from '../icons/HerokuIcon';
import VercelIcon from '../icons/VercelIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import waves from '../waves/waves';
import Carousel from '../Carousel/Carousel';

export default function Project({ id, project }) {
  const Wave = waves[`Wave${project.waveNum}`];

  return (
    <div
      className={`${S.box} ${project.textTheme === 'light' ? S.light : S.dark}`}
      style={{
        background: `#${project.color}`,
      }}
    >
      <Wave color={project.color} />
      <div className={S.imgBox}>
        {/* <img className={S.img} src={project.images[0]} alt="" /> */}
        <Carousel images={project.images} />
      </div>

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

        <ul className={S.techs}>
          {project.techs.map((t, i) => (
            <li className={S.tech} key={i}>
              {t}
            </li>
          ))}
        </ul>

        <div className={S.links}>
          <div>
            <a
              className={S.linkIconS}
              target="_blank"
              href={project.githubLink}
            >
              <GithubIcon />
            </a>
            <a className={S.linkIconS} target="_blank" href={project.demoLink}>
              {project.demoLink.includes('heroku') ? (
                <HerokuIcon />
              ) : project.demoLink.includes('vercel') ? (
                <VercelIcon />
              ) : (
                <Github2Icon />
              )}
              <p className={S.undertitle}>Live Demo</p>
            </a>
          </div>
          <Link href={`/projects/${id}`}>
            <a className={S.linkIconS}>
              <ArrowRightIcon />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
