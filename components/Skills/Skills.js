import S from './Skills.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function Skills({ skillsRef }) {
  return (
    <section ref={skillsRef} className={S.skills}>
      <SectionHeader title="SKILLS" />
      <div className={S.lists}>
        <div className={S.listBox}>
          <h3 className={S.listTitle}>Front-end</h3>
          <ul className={S.list}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>ReactJS, react router</li>
            <li>Redux, redux thunk</li>
            <li>Styled Components</li>
            <li>Sass</li>
            <li>Axios</li>
          </ul>
        </div>
        <div className={S.listBox}>
          <h3 className={S.listTitle}>Back-end</h3>
          <ul className={S.list}>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>PostgreSQL</li>
            <li>Pg (node-postgres)</li>
            <li>Jsonwebtoken</li>
            <li>Bcrypt</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
