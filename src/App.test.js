/* eslint linebreak-style: 0 */
import { render, screen } from '@testing-library/react';
import App from './components/Calculator';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
