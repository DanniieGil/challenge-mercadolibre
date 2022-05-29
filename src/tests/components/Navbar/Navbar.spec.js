import { render, screen } from '@testing-library/react';
import Navbar from '@components/Navbar/Navbar';

describe('Navbar', () => {
  it('should render Navbar', () => {
    const {container} = render(<Navbar />);
    const place_holder = screen.getByPlaceholderText('Nunca dejes de buscar');

    expect(container).toMatchSnapshot();
    expect(place_holder).toBeInTheDocument();
  });
});
