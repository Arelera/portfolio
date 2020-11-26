import S from './Wave.module.scss';

export default function Wave({ color }) {
  return (
    <svg
      className={S.wave}
      preserveAspectRatio="none"
      viewBox="0 0 1440 170"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={`#${color}`}
        d="M0 64l120 21.3C240 107 480 149 720 160s480-11 600-21.3l120-10.7v192H0z"
      />
    </svg>
  );
}
