import S from './Icon.module.scss';

export default function ChevRightIcon({ size }) {
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
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
