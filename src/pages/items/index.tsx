import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import ProductCard from '@components/ProductCard/ProductCard';
import style from '@components/ProductCard/ProductCard.module.scss';
import { Head } from '@context/share/Seo/components/Head';
import useFetch from '@hooks/useFetch';
import ProductNotFound from '@components/ProductNotFound/ProductNotFound';

const ProductCatalog = ({ productList, query }) => {
  const { items } = productList;
  const { ContainerProducts } = style;
  const router = useRouter();

  const goToDetailProduct = ({ idProduct }) => {
    router.push(`/items/${idProduct}`);
  };

  return (
    <section>
      <Head title={query ? `${query} | MercadoLibre` : undefined} />
      
      {items?.length <= 0 && <ProductNotFound />}

      {items?.length >= 1 && (
        <div className={ContainerProducts}>
          {items.map((product) => {
            const { id, title, price, free_shipping, picture } = product;
            const { amount } = price;

            return (
              <ProductCard
                key={id}
                title={title}
                picture={picture}
                price={amount}
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
      )}
    </section>
  );
};

export default ProductCatalog;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { search } = query;
  const response = await useFetch({
    url: `http://localhost:3000/api/items?q=${search}`,
  });

  return {
    props: {
      productList: response,
      query: query.search,
    },
  };
};
