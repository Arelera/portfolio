import S from './Icon.module.scss';

export default function HerokuIcon({ color, size }) {
  return (
    <svg
      className={
        size === 'large' ? S.iconL : size === 'med' ? S.iconM : S.iconS
      }
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={`#${color}`}
        d="M20.61 0H3.39c-1.2 0-2.16.96-2.16 2.16v19.68c0 1.2.96 2.16 2.16 2.16h17.22c1.2 0 2.16-.96 2.16-2.16V2.16C22.77.96 21.8 0 20.6 0zm.96 21.84c0 .54-.42.96-.96.96H3.39a.95.95 0 01-.96-.96V2.16c0-.54.42-.96.96-.96h17.22c.54 0 .96.42.96.96v19.68zM6.63 20.4l2.7-2.4-2.7-2.4v4.8zm9.72-9.72a3.92 3.92 0 00-2.88-1.08c-1.62 0-3.3.42-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.06-.18.06-1.5-.96-2.52zM13.17 7.5h2.4a7.24 7.24 0 001.8-3.9h-2.4a8.88 8.88 0 01-1.8 3.9z"
      />
    </svg>
  );
}
