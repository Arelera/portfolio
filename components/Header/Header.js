import Banner from './Banner/Banner';
import Blobs from './Banner/Blobs/Blobs';
import S from './Header.module.scss';
import Navbar from './Navbar/Navbar';

export default function Header({
  scrollToProjects,
  scrollToSkills,
  scrollToTop,
}) {
  return (
    <header className={S.header}>
      <Navbar
        scrollToTop={scrollToTop}
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
      />
      <Banner scrollToSkills={scrollToSkills} />
      <Blobs />
    </header>
  );
}
