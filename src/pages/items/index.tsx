import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import ProductCard from '@components/ProductCard/ProductCard';
import { Head } from '@context/share/Seo/components/Head';
import useFetch from '@hooks/useFetch';
import ProductNotFound from '@components/ProductNotFound/ProductNotFound';
import LabelCategory from '@components/LabelCategory/LabelCategory';
const PUBLIC_URL_SERVER = process.env.PUBLIC_URL_SERVER;

const ProductCatalog = ({ productList, query }) => {
  const { items, categories } = productList;
  const router = useRouter();

  const goToDetailProduct = ({ idProduct }) => {
    router.push(`/items/${idProduct}`);
  };

  const emptyCatalogProduct = () => {
    const productListStatus = items?.length;
    if (productListStatus <= 0 || productListStatus === undefined) {
      return true;
    }
  };

  return (
    <section className={'ProductCatalog'}>
      <Head title={query && items?.length >= 1 ? `${query} | MercadoLibre` : undefined} />

      {emptyCatalogProduct() ? (
        <ProductNotFound />
      ) : (
        <>
          <LabelCategory categories={categories} />
          <div>
            {items.map((product) => {
              const { id, title, price, free_shipping, picture, state_name } = product;
              const { amount } = price;

              return (
                <ProductCard
                  key={id}
                  title={title}
                  picture={picture}
                  price={amount}
                  free_shipping={free_shipping}
                  state_name={state_name}
                  onClick={() =>
                    goToDetailProduct({
                      idProduct: id,
                    })
                  }
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default ProductCatalog;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { search } = query;
  const response = await useFetch({
    url: `${PUBLIC_URL_SERVER}/api/items?q=${search}`,
  });

  if (response?.items.length >= 0) {
    return {
      props: {
        productList: { ...response },
        query: query.search,
      },
    };
  }
};
