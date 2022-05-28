import Icon from '@components/commons/Icon/Icon';
import { moneyFormat } from 'src/utils/moneyFormat';
import style from './ProductCard.module.scss';
const {
  ProductCardContainer,
  ImageProduct,
  PriceProduct,
  TitleProduct,
  ShippingProduct,
} = style;

type ProductCardProps = {
  title: string;
  price: number;
  free_shipping: boolean;
  picture: string;
  onClick: () => void;
};

const ProductCard = ({
  title,
  price,
  free_shipping,
  picture,
  onClick,
}: ProductCardProps) => {

  return (
    <div className={ProductCardContainer} onClick={onClick}>
      <img
        className={ImageProduct}
        src={picture}
        alt={`Foto de ${title} | Mercado Libre`}
      />
      <div className={PriceProduct}>{moneyFormat(price)}</div>
      <div className={ShippingProduct}>
        {free_shipping && (
          <Icon
            src="http://localhost:3000/images/assets/ic_shipping.png"
            width={15}
            height={15}
          />
        )}
      </div>
      <div className={TitleProduct}>{title}</div>
    </div>
  );
};

export default ProductCard;
