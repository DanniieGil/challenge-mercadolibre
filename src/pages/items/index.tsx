import useFetch from '@hooks/useFetch';
import React from 'react';

export async function getServerSideProps(params) {
  const { query } = params;
  const { search } = query;
  const response = await useFetch({ url: `http://localhost:3000/api/items?q=${search}` });

  return {
    props: {
      productList: response,
    },
  };
}

const ProductCatalog = ({ productList }) => {
  const { categories, items } = productList;
  return (
    <div>
      {items.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};

export default ProductCatalog;
