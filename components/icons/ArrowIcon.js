import S from './Icon.module.scss';

export default function GithubIcon({ color, size }) {
  return (
    <svg
      className={
        size === 'large' ? S.iconL : size === 'med' ? S.iconM : S.iconS
      }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke={`#${color}`} d="M15 10l5 5-5 5" />
      <path stroke={`#${color}`} d="M4 4v7a4 4 0 004 4h12" />
    </svg>
  );
}
// fill={`#${color}`}
