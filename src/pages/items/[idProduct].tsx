import LabelCategory from '@components/LabelCategory/LabelCategory';
import ProductDetail from '@components/ProductDetail/ProductDetail';
import useFetch from '@hooks/useFetch';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next/types';

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

const ProductItem = ({ productDetail }) => {
  const router = useRouter();
  const { idProduct } = router.query;

  return (
    <>
      <LabelCategory />
      <ProductDetail productDetail={productDetail} />
    </>
  );
};

export default ProductItem;
