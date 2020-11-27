import S from './DownArrow.module.scss';

export default function DownArrow({ color }) {
  return (
    <div className={S.downArrow}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke={`#${color}`} d="M6 9l6 6 6-6" />
      </svg>
    </div>
  );
}
