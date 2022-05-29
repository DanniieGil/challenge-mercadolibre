import { render, screen } from '@testing-library/react';
import ProductCard from '@components/ProductCard/ProductCard';
import { ProductDetailMock } from '../../mocks/product-detail-mock';
import { moneyFormat } from '@utils/moneyFormat';

describe('ProductCard', () => {
  const { container } = render(
    <ProductCard
      title={ProductDetailMock.title}
      price={ProductDetailMock.price.amount}
      free_shipping={true}
      picture={ProductDetailMock.picture}
      state_name={ProductDetailMock.state_name}
      onClick={jest.fn()}
    />
  );

  it('should render a ProductCard', () => {
    const imageProduct = screen.getByAltText(
      'Foto de Microsoft Xbox Series S 512gb Standard Color Blanco | Mercado Libre'
    );
    const titleProduct = container.querySelector('div.TitleProduct');
    const priceProduct = container.querySelector('span.PriceProduct');
    const cityProduct = container.querySelector('div.CityProduct');

    expect(container).toBeInTheDocument();
    expect(imageProduct).toBeInTheDocument();
    expect(titleProduct.textContent).toBe(ProductDetailMock.title);
    expect(priceProduct.textContent).toBe(moneyFormat(ProductDetailMock.price.amount));
    expect(cityProduct.textContent).toBe(ProductDetailMock.state_name);
  });
});
