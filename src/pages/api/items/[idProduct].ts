import { NextApiRequest, NextApiResponse } from 'next';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { GetProductDetailMapper } from '@mappers/api/get-product-detail.mapper';

const GetProductDetail = async (request: NextApiRequest, response: NextApiResponse) => {
  const { idProduct } = request.query;

  const dataProductDetail = await useFetch({ url: endPoints.products.getProductDetail(idProduct) });
  const dataProductDescription = await useFetch({ url: endPoints.products.getProductDescription(idProduct) });
  const dataProductCompleted = { ...dataProductDetail, ...dataProductDescription };
  
  const result = GetProductDetailMapper({ dataProduct: dataProductCompleted });

  response.setHeader('Content-type', 'application/json');
  response.status(200).send(result);
};

export default GetProductDetail;
