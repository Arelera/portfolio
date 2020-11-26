import S from './Wave.module.scss';

export default function Wave({ color }) {
  return (
    <svg
      className={S.wave}
      preserveAspectRatio="none"
      viewBox="0 0 1440 150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={`#${color}`}
        d="M0 32h80c80 0 240 0 400 10.7C640 53 800 75 960 90.7c160 16.3 320 26.3 400 32l80 5.3v192H0z"
      />
    </svg>
  );
}
