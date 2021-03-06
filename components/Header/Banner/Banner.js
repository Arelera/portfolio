import S from './Banner.module.scss';
import DownButton from './DownButton/DownButton';
import GithubIcon from '../../icons/GithubIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';

export default function Banner({ scrollToSkills }) {
  return (
    <section className={S.banner}>
      <h1 className={S.fullName}>
        Arel Alkım <span className={S.lastname}>Yurtsevenler</span>{' '}
      </h1>
      <h2 className={S.description}>Software Developer</h2>

      <div className={S.links}>
        <a href="https://www.linkedin.com/in/arelalkim/" target="_blank">
          <LinkedinIcon size="large" />
        </a>
        <a href="https://github.com/Arelera" target="_blank">
          <GithubIcon size="large" />
        </a>
      </div>

      <DownButton onClick={scrollToSkills} />
    </section>
  );
}
