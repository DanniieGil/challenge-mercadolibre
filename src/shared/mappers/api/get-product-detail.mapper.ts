import { DetailProductMapperDto } from '@dtos/detail-product-mapper.dto';

export function GetProductDetailMapper({
  dataProduct: { id, title, price, currency_id, thumbnail, condition, shipping, sold_quantity, plain_text },
}): DetailProductMapperDto {
  return {
    author: {
      name: 'Daniel',
      lastname: 'Gil',
    },
    item: {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
      },
      picture: thumbnail,
      condition,
      free_shipping: shipping?.free_shipping,
      sold_quantity,
      description: plain_text,
    },
  };
}
