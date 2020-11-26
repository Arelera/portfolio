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
        d="M0 128l80 10.7c80 10.3 240 32.3 400 16C640 139 800 85 960 69.3c160-16.3 320 5.7 400 16l80 10.7v224H0z"
      />
    </svg>
  );
}
