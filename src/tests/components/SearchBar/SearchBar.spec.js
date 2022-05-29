import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '@components/commons/inputs/SearchBar/SearchBar';

describe('SearchBar', () => {
  const { container } = render(<SearchBar />);
  const searchBarInput = screen.getByPlaceholderText('Nunca dejes de buscar');
  const searchBarIcon = screen.getByAltText('Buscar producto | Mercado Libre');

  it('should render SearchBar', () => {
    expect(container).toMatchSnapshot();
    expect(searchBarInput).toBeInTheDocument();
    expect(searchBarIcon).toBeInTheDocument();
  });

  it('should can type for search a product', () => {
    fireEvent.change(searchBarInput, { target: { value: 'Apple Pod' } });
    expect(searchBarInput.value).toBe('Apple Pod');
  });

  it('show only search results when search term is not empty', () => {
    const otro = userEvent.type(searchBarInput, 'Xbox');
    expect(otro).toMatchSnapshot();
  });
});
