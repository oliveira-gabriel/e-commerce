import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
describe('Teste do componete mini-ecommer', () => {
  
  it('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/commerce/i);
    expect(linkElement).toBeInTheDocument();
  });
})
