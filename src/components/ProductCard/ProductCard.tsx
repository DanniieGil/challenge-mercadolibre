import Icon from '@components/commons/Icon/Icon';
import { moneyFormat } from 'src/utils/moneyFormat';
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
    CityProduct
  } = style;

  return (
    <section className={ProductCardContainer} onClick={onClick}>
      <img
        className={ImageProduct}
        src={picture}
        alt={`Foto de ${title} | Mercado Libre`}
      />

      <div className={SubContainer}>
        <div className={PriceProduct}>{moneyFormat(price)}</div>
        {free_shipping && (
          <div className={ShippingProduct}>
            <Icon
              src="http://localhost:3000/images/assets/ic_shipping.png"
              width={15}
              height={15}
            />
          </div>
        )}
      </div>
      <div className={TitleProduct}>{title}</div>
      <div className={CityProduct}>{state_name}</div>

    </section>
  );
};

export default ProductCard;
