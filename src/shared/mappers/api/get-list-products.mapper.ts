import { ListProductsMapperDto } from '@dtos/list-products-mapper.dto';

export function GetListProductsMapper({ listProducts }): ListProductsMapperDto {
  const { results, filters } = listProducts;
  return {
    author: {
      name: 'Daniel',
      lastname: 'Gil',
    },
    categories: getCategories(filters),
    items: getItems(results),
  };
}

function getCategories(categories) {
  const categoryList = categories[0]?.values[0]?.path_from_root;
  return categoryList?.map((category) => {
    const { name } = category;
    return name;
  });
}

function getItems(results) {
  return results.slice(0, 4).map((item) => {
    const { id, title, price, currency_id, thumbnail, condition, shipping } = item;
    return {
      id,
      title,
      price: {
        currency: currency_id,
        amount: price,
      },
      picture: thumbnail,
      condition,
      free_shipping: shipping?.free_shipping,
    };
  });
}
