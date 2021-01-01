import S from './Banner.module.scss';
import DownButton from './DownButton/DownButton';
import GithubIcon from '../../icons/GithubIcon';
import MailIcon from '../../icons/MailIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';

export default function Banner({ scrollToSkills }) {
  return (
    <section className={S.banner}>
      <h1 className={S.fullName}>
        Arel Alkım <span className={S.lastname}>Yurtsevenler</span>{' '}
      </h1>
      <h2 className={S.description}>Self-taught web developer.</h2>

      <div className={S.links}>
        <a href="#" target="_blank">
          <LinkedinIcon size="med" />
        </a>
        <a href="https://github.com/Arelera" target="_blank">
          <GithubIcon size="med" />
        </a>
        <a href="#" target="_blank">
          <MailIcon size="med" />
        </a>
        <a href="/resume1t.pdf" target="_blank">
          <h3 className={S.resume}>RESUME</h3>
        </a>
      </div>

      <DownButton onClick={scrollToSkills} />
    </section>
  );
}
