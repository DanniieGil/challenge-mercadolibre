import style from './ProductCard.module.scss';

type ProductCardProps = {
  title: string;
  price: number;
  currency: string;
  free_shipping: boolean;
  picture: string;
  onClick: () => void;
};

const ProductCard = ({
  title,
  price,
  currency,
  free_shipping,
  picture,
  onClick,
}: ProductCardProps) => {
  return (
    <div className={style.ProductCardContainer} onClick={onClick}>
      <img className={style.ImageProduct} src={picture} alt="" width="20%" />
      <div className={style.PriceProduct}>{'$ ' + price}</div>
      <div className={style.TitleProduct}>{title}</div>
      <div>{free_shipping ? 'Free' : 'Na'}</div>
      <div>Bogotá</div>
    </div>
  );
};

export default ProductCard;
