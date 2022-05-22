import { useRouter } from 'next/router';

const ProductItem = () => {
  const router = useRouter();
  const { idProduct } = router.query;

  return <div>ProductItem: {idProduct}</div>;
};

export default ProductItem;
