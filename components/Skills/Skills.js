import S from './Skills.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function Skills({ skillsRef }) {
  return (
    <section ref={skillsRef} className={S.skills}>
      <SectionHeader title="SKILLS" theme="dark" />
      <div className={S.lists}>
        <div className={S.listBox}>
          <h3 className={S.listTitle}>Front-end</h3>
          <ul className={S.list}>
            <li className={S.listItem}>HTML5</li>
            <li className={S.listItem}>CSS3/Sass</li>
            <li className={S.listItem}>JavaScript</li>
            <li className={S.listItem}>ReactJS</li>
            <li className={S.listItem}>Redux</li>
            <li className={S.listItem}>Styled Components</li>
          </ul>
        </div>
        <div className={S.listBox}>
          <h3 className={S.listTitle}>Back-end</h3>
          <ul className={S.list}>
            <li className={S.listItem}>NodeJS</li>
            <li className={S.listItem}>ExpressJS</li>
            <li className={S.listItem}>PostgreSQL</li>
            <li className={S.listItem}>MongoDB</li>
            <li className={S.listItem}>Jsonwebtoken</li>
            <li className={S.listItem}>Bcrypt</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
