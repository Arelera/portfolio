import DownArrow from './DownArrow';
import S from './DownButton.module.scss';

export default function DownButton({ onClick }) {
  return (
    <div className={S.container}>
      <a href="#skills" onClick={onClick} className={S.downButton}>
        <DownArrow />
      </a>
    </div>
  );
}
