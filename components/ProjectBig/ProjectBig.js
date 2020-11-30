import S from './ProjectBig.module.scss';
import Link from 'next/link';
import Head from 'next/head';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import GithubIcon from '../icons/GithubIcon';
import Github2Icon from '../icons/Github2Icon';
import HerokuIcon from '../icons/HerokuIcon';
import VercelIcon from '../icons/VercelIcon';
import Carousel from '../Carousel/Carousel';

export default function ProjectBig({ project }) {
  const {
    name,
    type,
    descriptionLong,
    techs,
    images,
    githubLink,
    demoLink,
    textTheme,
    color,
  } = project;

  return (
    <div
      className={`${S.container} ${textTheme === 'light' ? S.light : S.dark}`}
      style={{ background: `#${color}` }}
    >
      <Head>
        <title>{name} | Arel</title>
      </Head>
      <header className={S.header}>
        <Link href="/">
          <a className={`${S.leftArrow} ${S.link}`}>
            <ArrowLeftIcon size="med" />
          </a>
        </Link>
        <h1 className={S.title}>{name}</h1>
        <h2 className={S.undertitle}>{type}</h2>
        <ul className={S.techs}>
          {techs.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </header>

      <div className={S.content}>
        <div className={S.topSide}>
          <div className={S.imgBox}>
            <Carousel images={images.map((img) => `../${img}`)} />
          </div>

          <div className={S.links}>
            <a className={S.link} href={githubLink} target="_blank">
              <GithubIcon size="med" />
            </a>
            {
              <a className={S.link} href={demoLink} target={'_blank'}>
                {project.demoLink.includes('heroku') ? (
                  <HerokuIcon size="med" />
                ) : project.demoLink.includes('vercel') ? (
                  <VercelIcon size="med" />
                ) : (
                  <Github2Icon size="med" />
                )}
                <p>Live demo</p>
              </a>
            }
          </div>
        </div>

        <div className={S.info}>
          {descriptionLong.map((desc, i) => (
            <p className={S.desc} key={i}>
              {desc}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
