import style from './Error404.module.scss';
import Icon from '@components/commons/Icon/Icon';

const Error404 = () => {
  const { Error404Container, MainTitle, SecondaryMessage } = style;

  return (
    <section className={Error404Container}>
      <Icon src="/images/404.svg" width={251} height={154} />
      <div className={MainTitle}>Parece que esta página no existe</div>
      <div className={SecondaryMessage}>Ir a la página principal</div>
    </section>
  );
};

export default Error404;
