import Button, { ButtonVariants } from '@components/commons/Button/Button';
import LabelCategory from '@components/LabelCategory/LabelCategory';
import { moneyFormat } from '@utils/moneyFormat';
import style from './ProductDetail.module.scss';

const ProductDetail = ({ productDetail }) => {
  const {
    description,
    condition,
    free_shipping,
    id,
    picture,
    price,
    sold_quantity,
    title,
  } = productDetail;

  return (
    <section className={style.ProductDetailContainer}>
      {/* <LabelCategory categories={productCategory} /> */}
      <img
        className={style.ProductImage}
        src={picture}
        height="468px"
        alt={`Foto de ${title} | Mercado Libre`}
        title={`${title} en Venta en Mercado Libre.`}
      />

      <main className={style.ProductDetailSubContainer__1}>
        <span className={style.ProductCondition}>
          {condition === 'new' ? 'Nuevo' : 'Usado'}
          {' - '}
          {sold_quantity >= 0 ? `${sold_quantity} vendidos` : ''}
        </span>

        <div className={style.ProductTitle}>{title}</div>
        <div className={style.ProductPrice}>{moneyFormat(price.amount)}</div>
        <div className={style.ProductCTA}>
          <Button appearance={ButtonVariants.PRIMARY} />
        </div>
      </main>

      <main>
        Descripción del producto
        <div className={style.ProductDescription}>{description}</div>
      </main>
    </section>
  );
};

export default ProductDetail;
