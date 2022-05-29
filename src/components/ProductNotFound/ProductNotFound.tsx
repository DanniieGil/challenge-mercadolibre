import Icon from '@components/commons/Icon/Icon';
import style from './ProductNotFound.module.scss';
const { ProductNotFoundContainer, MainTitle, List } = style;

const ProductNotFound = () => {
  return (
    <section className={ProductNotFoundContainer}>
      <Icon src="/images/Productnotfound.svg" width={80} height={80}/>
      <div className={MainTitle}>No hay publicaciones que coincidan con tu búsqueda.</div>
      <ul className={List}>
        <li>
          <strong>Revisa la ortografía</strong> de la palabra.
        </li>
        <li>
          Utiliza <strong>palabras más genéricas</strong> o menos palabras.
        </li>
      </ul>
    </section>
  );
};

export default ProductNotFound;
