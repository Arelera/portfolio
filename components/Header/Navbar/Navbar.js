import { useEffect, useState } from 'react';
import S from './Navbar.module.scss';

export default function Navbar({
  scrollToProjects,
  scrollToContact,
  scrollToSkills,
}) {
  const [scrolled, setScrolled] = useState(false);
  const isBrowser = () => typeof window !== 'undefined';

  const changeStyle = () => {
    window.scrollY >= window.visualViewport.height - 400
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
          <a>Home</a>
        </li>
        <li className={S.navItem}>
          <a onClick={scrollToSkills}>Skills</a>
        </li>
        <li className={S.navItem}>
          <a onClick={scrollToProjects}>Projects</a>
        </li>
        <li className={S.navItem}>
          <a onClick={scrollToContact}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}
