import S from './Wave.module.scss';

// preserveAspectRatio="none" viewBox="0 0 1440 xxx"
export default function Wave({ color }) {
  return (
    <svg
      className={S.wave}
      preserveAspectRatio="none"
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={`#${color}`}
        d="M0 96l120 5.3C240 107 480 117 720 112s480-27 600-37.3L1440 64v256H0z"
      />
    </svg>
  );
}
