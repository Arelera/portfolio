import S from './Wave.module.scss';

export default function Wave({ color }) {
  return (
    <svg
      className={S.wave}
      preserveAspectRatio="none"
      viewBox="0 0 1440 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={`#${color}`}
        d="M0 192l60-21.3c60-21.7 180-63.7 300-53.4C480 128 600 192 720 192s240-64 360-101.3C1200 53 1320 43 1380 37.3l60-5.3v288H0z"
      />
    </svg>
  );
}
