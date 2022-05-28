import Button, { ButtonVariants } from '@components/commons/Button/Button';
import style from './ProductDetail.module.scss';

const ProductDetail = ({ productDetail }) => {
  const { description, free_shipping, id, picture, price, sold_quantity, title } =
    productDetail;

  return (
    <div className={style.ProductDetailContainer}>
      <img
        className={style.ProductImage}
        src={picture}
        height="468px"
        alt={`Foto de ${title} | Mercado Libre`}
        title={`${title} en Venta en Mercado Libre.`}
      />
      <section className={style.ProductDetailSubContainer__1}>
        <div className={style.ProductTitle}>{title}</div>
        <div className={style.ProductPrice}>$ {price.amount}</div>
        <div className={style.ProductCTA}>
          <Button appearance={ButtonVariants.PRIMARY} />
        </div>
      </section>

      <div>
        Descriṕción del producto
        <div className={style.ProductDescription}>{description}</div>
      </div>
    </div>
  );
};

export default ProductDetail;
