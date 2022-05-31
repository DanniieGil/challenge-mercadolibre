import { NextApiRequest, NextApiResponse } from 'next';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api/';
import { GetListProductsMapper } from '@mappers/api/get-list-products.mapper';

const GetListProducts = async (request: NextApiRequest, response: NextApiResponse) => {
  const { q } : any = request.query;
  const getProducts = await useFetch({ url: endPoints.products.getAllProducts(encodeURIComponent(q)) });
  const result = GetListProductsMapper({ listProducts: getProducts });

  response.setHeader('Content-type', 'application/json');
  response.status(200).json(result);
};

export default GetListProducts;
