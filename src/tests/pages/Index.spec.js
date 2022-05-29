import { render, screen, within } from '@testing-library/react';
import Home from '@pages/';

describe('Home', () => {
  const { container } = render(<Home />);
  it('should render Home', () => {
    expect(container).toMatchSnapshot();
  });


});
