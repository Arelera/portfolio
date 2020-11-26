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
        d="M0 32l60 21.3c60 21.7 180 63.7 300 64 120-.3 240-42.3 360-48C840 64 960 96 1080 90.7c120-5.7 240-47.7 300-69.4L1440 0v320H0z"
      />
    </svg>
  );
}
