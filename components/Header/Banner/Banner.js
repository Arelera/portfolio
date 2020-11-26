import S from './Banner.module.scss';

export default function Banner() {
  return (
    <section className={S.banner}>
      <h1 className={S.fullName}>
        Arel Alkım <span className={S.lastname}>Yurtsevenler</span>{' '}
      </h1>
      <h2 className={S.description}>
        I'm a passionate front-end developer who enjoys working with React.
      </h2>
    </section>
  );
}
