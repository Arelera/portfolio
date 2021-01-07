import S from './Footer.module.scss';
import Link from 'next/link';
import Wave from '../waves/Wave0';

export default function Footer() {
  return (
    <footer className={S.footer}>
      <Wave color="252525" />
      <div className={S.personal}>
        <Link href="/">
          <a>
            <h4>Arel Alkım Yurtsevenler</h4>
          </a>
        </Link>
        <h5>Web Developer</h5>
      </div>
      <div className={S.contactInfo}>
        <h4>Contact & Info</h4>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/arelalkim/" target="_blank">
              Linkedin
            </a>
          </li>
          <li>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a href="https://github.com/Arelera" target="_blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
