import { render, cleanup } from '@testing-library/react';
import ProductDetail from '@components/ProductDetail/ProductDetail';
import { ProductDetailMock } from '../../mocks/product-detail-mock';
import { moneyFormat } from '@utils/moneyFormat';

afterEach(cleanup);

describe('ProductDetail', () => {
  const { container } = render(<ProductDetail productDetail={ProductDetailMock} />);
  it('should render ProductDetail:', () => {
    const productTitle = container.querySelector('div.ProductTitle');
    const productDescription = container.querySelector('div.ProductDescriptionContent');

    expect(container).toBeInTheDocument();
    expect(productTitle.textContent).toBe(ProductDetailMock.title);
    expect(productDescription.textContent).toBe(ProductDetailMock.description);
  });

  it('should render a picture with exact width for the view detail product:', () => {
    const { container } = render(<ProductDetail productDetail={ProductDetailMock} />);
    const productImage = container.querySelector('img.ProductImage');
    expect(productImage.src).toBe(ProductDetailMock.picture);
    expect(productImage).toHaveAttribute('width', '680px');
  });

  it('should render the price of product:', () => {
    const { container } = render(<ProductDetail productDetail={ProductDetailMock} />);
    const productPrice = container.querySelector('div.ProductPrice');
    expect(productPrice.textContent).toBe(moneyFormat(ProductDetailMock.price.amount));
  });

  it('should render the button for buy a product:', () => {
    const { container } = render(<ProductDetail productDetail={ProductDetailMock} />);
    const buyButton = container.querySelector('div.ProductCTA');
    expect(buyButton.textContent).toBe('Comprar');
  });
});
