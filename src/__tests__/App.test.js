import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Nav Item 1 link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nav Item 1/i);
  expect(linkElement).toBeInTheDocument();
});
