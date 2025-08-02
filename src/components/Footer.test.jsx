/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Footer from './Footer';

test('renders footer text', () => {
  render(<Footer />);
  expect(screen.getByText(/©/i)).toBeInTheDocument();
});
