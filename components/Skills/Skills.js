import S from './Skills.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function Skills({ skillsRef }) {
  return (
    <section ref={skillsRef} className={S.skills}>
      <SectionHeader title="Skills" />
      <div className={S.lists}>
        <div className={S.listBox}>
          <h3 className={S.listTitle}>Front-end</h3>
          <ul className={S.list}>
            <li>ReactJS</li>
            <li>React router</li>
            <li>Redux</li>
            <li>Redux thunk</li>
            <li>NextJS</li>
            <li>Styled Components</li>
            <li>Sass</li>
            <li>Axios</li>
          </ul>
        </div>
        <div className={S.listBox}>
          <h3 className={S.listTitle}>Back-end</h3>
          <ul className={S.list}>
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>PostgreSQL</li>
            <li>Pg (node-postgres)</li>
            <li>RDS</li>
            <li>Jsonwebtoken</li>
            <li>Bcrypt</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
