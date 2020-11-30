import S from './Icon.module.scss';

export default function ResumeIcon({ color, size }) {
  return (
    <svg
      className={
        size === 'large' ? S.iconL : size === 'med' ? S.iconM : S.iconS
      }
      stroke="currentColor"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={`#${color}`}
        d="M486 512H26V0h293l167 162zM44 494h424V169L312 18H44z"
      />
      <path
        stroke={`#${color}`}
        d="M477 174H307V9h18v147h152v18zM170 182a68 68 0 1168-68 68 68 0 01-68 68zm0-118a50 50 0 1050 50 50 50 0 00-50-50z"
      />
      <path
        stroke={`#${color}`}
        d="M258 230h-18v-20a35 35 0 00-35-35h-5l-6-11 11-6v-1h1l3-2 1 2a53 53 0 0148 53zM105 230H87v-20a53 53 0 0149-53l3-3 13 12-8 9h-4a35 35 0 00-35 35zM87 262h338v18H87zM87 316h338v18H87zM87 370h338v18H87zM87 425h177v18H87z"
      />
    </svg>
  );
}
