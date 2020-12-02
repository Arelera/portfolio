import S from '../styles/Custom404.module.scss';

export default function Custom404() {
  return (
    <div className={S.container}>
      <div className={S.h1Box}>
        <h1 className={S.h1}>404</h1>
      </div>
      <h2 className={S.h2}>This page could not be found</h2>
    </div>
  );
}
