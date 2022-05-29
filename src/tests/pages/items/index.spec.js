import { render } from '@testing-library/react';
import ProductCatalog from '@pages/items';
import { ProductCatalogMock } from '../../mocks/product-catalog-mock';

describe('ProductCatalog', () => {
  it('should render ProductCatalog ', () => {
    const { container } = render(<ProductCatalog productList={ProductCatalogMock} />);
    expect(container)
  });

  it('should render ProductNotFound when catalog is empty:', () => {
    const { container } = render(<ProductCatalog productList={[]} />);
    const productNotFound = container.querySelector('Section.ProductNotFoundContainer')
    expect(productNotFound).toBeValid()
  });
});
