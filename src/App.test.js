import { render, screen } from '@testing-library/react';
import App from './App';

test('Premios Macula', () => {
  render(<App />);
  const linkElement = screen.getByText("PREMIOS MÁCULA");
  expect(linkElement).toBeInTheDocument();
});
