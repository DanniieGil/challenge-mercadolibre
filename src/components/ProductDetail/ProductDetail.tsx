import Button, { ButtonVariants } from '@components/commons/Button/Button';
import LabelCategory from '@components/LabelCategory/LabelCategory';
import { Head } from '@context/share/Seo/components/Head';
import { moneyFormat } from '@utils/moneyFormat';
import style from './ProductDetail.module.scss';

const ProductDetail = ({ productDetail }) => {
  const { description, condition, picture, price, sold_quantity, title } = productDetail;

  return (
    <>
      <Head
        title={`${title} | Mercado Libre`}
        description={description}
        image={picture}
      />
      
      <section className={style.ProductDetailContainer}>
        <LabelCategory categories={['Consola Video juegos Prueba', 'Xbox One']} />

        <div className={style.ProductDetailData}>
          <img
            className={style.ProductImage}
            src={picture}
            width="680px"
            alt={`Foto de ${title} | Mercado Libre`}
            title={`${title} en Venta en Mercado Libre.`}
          />

          <main className={style.ProductDetailSubContainer__1}>
            <div className={style.ProductCondition}>
              {condition === 'new' ? 'Nuevo' : 'Usado'}

              {sold_quantity > 0 ? ` - ${sold_quantity} vendidos` : ''}
            </div>

            <div className={style.ProductTitle}>{title}</div>
            <div className={style.ProductPrice}>{moneyFormat(price.amount)}</div>
            <div className={style.ProductCTA}>
              <Button appearance={ButtonVariants.PRIMARY} />
            </div>
          </main>

          <main>
            <div className={style.ProductDescriptionTitle}>Descripción del producto</div>
            <div className={style.ProductDescriptionContent}>{description}</div>
          </main>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
