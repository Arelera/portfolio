import S from './Footer.module.scss';
import Wave from '../waves/Wave0';

export default function Footer() {
  return (
    <footer className={S.footer}>
      <Wave color="252525" />
      <div className={S.personal}>
        <h4>Arel Alkım Yurtsevenler</h4>
        <h5>Web Developer</h5>
      </div>
      <div className={S.contactInfo}>
        <h4>Contact and Info</h4>
        <ul>
          <li>
            <a href="" target="_blank">
              Email
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              Linkedin
            </a>
          </li>
          <li>
            <a href="" target="_blank">
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
