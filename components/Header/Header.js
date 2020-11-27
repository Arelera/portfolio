import Banner from './Banner/Banner';
import Blobs from './Banner/Blobs/Blobs';
import S from './Header.module.scss';
import Navbar from './Navbar/Navbar';

export default function Header({
  scrollToProjects,
  scrollToContact,
  scrollToSkills,
}) {
  return (
    <header className={S.header}>
      <Navbar
        scrollToSkills={scrollToSkills}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <Banner scrollToSkills={scrollToSkills} />
      <Blobs />
    </header>
  );
}
