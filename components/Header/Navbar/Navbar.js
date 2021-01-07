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
    window.scrollY >= window.innerHeight - 600
      ? setScrolled(true)
      : setScrolled(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', changeStyle);
    return () => window.removeEventListener('scroll', changeStyle);
  }, [isBrowser() && window.scrollY]);

  const navItems = [
    { text: 'Home', href: '#home', onClick: scrollToTop },
    { text: 'Skills', href: '#skills', onClick: scrollToSkills },
    { text: 'Projects', href: '#projects', onClick: scrollToProjects },
  ];

  return (
    <nav className={`${S.navbar} ${scrolled && S.scrolled}`}>
      <ul className={`${S.navList}`}>
        {navItems.map((item, i) => (
          <li className={S.navItem} key={i}>
            <a href={item.href} onClick={item.onClick}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
