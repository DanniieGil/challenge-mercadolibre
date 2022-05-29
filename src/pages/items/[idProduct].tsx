import ProductDetail from '@components/ProductDetail/ProductDetail';
import useFetch from '@hooks/useFetch';
import { GetServerSideProps } from 'next/types';
const PUBLIC_URL_SERVER = process.env.PUBLIC_URL_SERVER;

const ProductItem = ({ productDetail }) => {
  return <ProductDetail productDetail={productDetail} />;
};

export default ProductItem;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { idProduct } = query;
  const response = await useFetch({
    url: `${PUBLIC_URL_SERVER}/api/items/${idProduct}`,
  });

  if (!!response.item.id) {
    return {
      props: {
        productDetail: response.item,
      },
    };
  }

  return {
    notFound: true,
  };
};
