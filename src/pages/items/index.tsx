import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import ProductCard from '@components/ProductCard/ProductCard';
import { Head } from '@context/Shared/Seo/components/Head';
import useFetch from '@hooks/useFetch';

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { search } = query;
  const response = await useFetch({
    url: `http://localhost:3000/api/items?q=${search}`,
  });

  return {
    props: {
      productList: response,
    },
  };
};

const ProductCatalog = ({ productList }) => {
  const { items } = productList;
  const router = useRouter();

  const goToDetailProduct = ({ idProduct }) => {
    router.push(`/items/${idProduct}`);
  };

  return (
    <div>
      <Head />

      {items.map((product) => {
        const { id, title, price, free_shipping, picture } = product;
        const { currency, amount } = price;

        return (
          <ProductCard
            key={id}
            title={title}
            picture={picture}
            price={amount}
            currency={currency}
            free_shipping={free_shipping}
            onClick={() =>
              goToDetailProduct({
                idProduct: id,
              })
            }
          />
        );
      })}
    </div>
  );
};

export default ProductCatalog;
