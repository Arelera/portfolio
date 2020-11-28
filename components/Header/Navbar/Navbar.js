import { useEffect, useState } from 'react';
import S from './Navbar.module.scss';

export default function Navbar({
  scrollToProjects,
  scrollToContact,
  scrollToSkills,
  scrollToTop,
}) {
  const [scrolled, setScrolled] = useState(false);
  const isBrowser = () => typeof window !== 'undefined';

  const changeStyle = () => {
    window.scrollY >= window.innerHeight - 400
      ? setScrolled(true)
      : setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', changeStyle);
    return () => window.removeEventListener('scroll', changeStyle);
  }, [isBrowser() && window.scrollY]);

  return (
    <nav className={`${S.navbar} ${scrolled && S.scrolled}`}>
      <ul className={`${S.navList}`}>
        <li className={S.navItem}>
          <a href="#home" onClick={scrollToTop}>
            Home
          </a>
        </li>
        <li className={S.navItem}>
          <a href="#skills" onClick={scrollToSkills}>
            Skills
          </a>
        </li>
        <li className={S.navItem}>
          <a href="#projects" onClick={scrollToProjects}>
            Projects
          </a>
        </li>
        <li className={S.navItem}>
          <a href="#contact" onClick={scrollToContact}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
