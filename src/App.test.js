import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

describe('App component test suite', () => {
  it('renders App component', () => {
    render(<Router><App /></Router>);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });
});