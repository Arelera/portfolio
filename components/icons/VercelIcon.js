import S from './Icon.module.scss';

export default function GithubIcon({ color, size }) {
  return (
    <svg
      className={
        size === 'large' ? S.iconL : size === 'med' ? S.iconM : S.iconS
      }
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={`#${color}`} d="M24 22.5H0l12-21 12 21z" />
    </svg>
  );
}
