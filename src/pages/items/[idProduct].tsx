import ProductDetail from '@components/ProductDetail/ProductDetail';
import useFetch from '@hooks/useFetch';
import { GetServerSideProps } from 'next/types';

const ProductItem = ({ productDetail }) => {
  return <ProductDetail productDetail={productDetail} />;
};

export default ProductItem;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { idProduct } = query;
  const response = await useFetch({
    url: `http://localhost:3000/api/items/${idProduct}`,
  });

  return {
    props: {
      productDetail: response.item,
    },
  };
};
