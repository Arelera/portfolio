import S from './Contact.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import GithubIcon from '../icons/GithubIcon';
import LinkedinIcon from '../icons/LinkedinIcon';
import MailIcon from '../icons/MailIcon';

export default function Contact({ contactRef }) {
  return (
    <section ref={contactRef}>
      <SectionHeader title="CONTACT" />
      <ul className={S.list}>
        <li className={S.listItem}>
          <a href="#">
            <MailIcon size="large" />
          </a>
        </li>
        <li className={S.listItem}>
          <a href="#">
            <LinkedinIcon size="large" />
          </a>
        </li>
        <li className={S.listItem}>
          <a href="#">
            <GithubIcon size="large" />
          </a>
        </li>
      </ul>
    </section>
  );
}
