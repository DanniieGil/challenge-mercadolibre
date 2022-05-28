import { ListProductsMapperDto } from '@dtos/list-products-mapper.dto';
import { getCategories } from '@utils/getCategories';
import { getItems } from '@utils/getItems';

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
