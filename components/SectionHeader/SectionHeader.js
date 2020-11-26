import S from './SectionHeader.module.scss';
import Wave0 from '../waves/Wave0';

export default function SectionHeader({ title }) {
  return (
    <header className={S.sectionHeader}>
      <Wave0 color={'fff'} />
      <h2 className={S.sectionTitle}>{title}</h2>
    </header>
  );
}
