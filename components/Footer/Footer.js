import S from './Footer.module.scss';
import Wave from '../waves/Wave0';

export default function Footer() {
  return (
    <footer className={S.footer}>
      <Wave color="252525" />
    </footer>
  );
}
