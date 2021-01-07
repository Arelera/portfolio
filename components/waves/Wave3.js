import S from './Wave.module.scss';

export default function Wave({ color }) {
  return (
    <svg
      className={S.wave}
      preserveAspectRatio="none"
      viewBox="0 0 1440 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={`#${color}`}
        d="M0 96l48 16c48 16 144 48 240 69 96 22 192 32 288 11s192-75 288-112 192-59 288-53c96 5 192 37 240 53l48 16v224H0z"
      />
    </svg>
  );
}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path
    fill="#09f"
    d="M0 96l48 16c48 16 144 48 240 69 96 22 192 32 288 11s192-75 288-112 192-59 288-53c96 5 192 37 240 53l48 16v224H0z"
  />
</svg>;
