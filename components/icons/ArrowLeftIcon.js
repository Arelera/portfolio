import S from './Icon.module.scss';

export default function ArrowLeftIcon({ size }) {
  return (
    <svg
      className={
        size === 'large' ? S.iconL : size === 'med' ? S.iconM : S.iconS
      }
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M9 14L4 9l5-5" />
      <path d="M20 20v-7a4 4 0 00-4-4H4" />
    </svg>
  );
}
