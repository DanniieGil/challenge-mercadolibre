import Icon from '@components/commons/Icon/Icon';
import { moneyFormat } from '@utils/moneyFormat';
import style from './ProductCard.module.scss';

type ProductCardProps = {
  title: string;
  price: number;
  free_shipping: boolean;
  picture: string;
  state_name: string;
  onClick: () => void;
};

const ProductCard = ({
  title,
  price,
  free_shipping,
  picture,
  state_name,
  onClick,
}: ProductCardProps) => {
  const {
    ProductCardContainer,
    SubContainer,
    ImageProduct,
    PriceProduct,
    TitleProduct,
    ShippingProduct,
    CityProduct,
  } = style;

  return (
    <section className={ProductCardContainer} onClick={onClick} role="product_card">
      <img
        className={`${ImageProduct}`}
        src={picture}
        alt={`Foto de ${title} | Mercado Libre`}
      />

      <div className={SubContainer}>
        <span className={PriceProduct}>{moneyFormat(price)}</span>
        {free_shipping && (
          <span className={ShippingProduct}>
            <Icon
              src="/images/assets/ic_shipping.png"
              width={15}
              height={15}
            />
          </span>
        )}
      </div>

      <div className={TitleProduct}>{title}</div>
      <div className={CityProduct}>{state_name}</div>
    </section>
  );
};

export default ProductCard;
