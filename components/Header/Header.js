import Banner from './Banner/Banner';
import S from './Header.module.scss';
import Navbar from './Navbar/Navbar';

export default function Header() {
  return (
    <header>
      <Navbar />
      <Banner />
    </header>
  );
}
