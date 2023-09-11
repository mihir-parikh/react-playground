import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter component test suite', () => {
    beforeEach(() => {
        render(<Counter />);
    });

    it('renders count and buttons', () => {
        const countElement = screen.getByText(/count/i);
        expect(countElement).toBeInTheDocument();
        const decrementButton = screen.getByText(/-/i);
        expect(decrementButton).toBeInTheDocument();
        const incrementButton = screen.getByText(/\+/i);
        expect(incrementButton).toBeInTheDocument();
    });

    it('increments count when + button is clicked', () => {        
        const countElement = screen.getByText(/count/i);
        const incrementButton = screen.getByText(/\+/i);
        fireEvent.click(incrementButton);
        expect(countElement).toHaveTextContent('Count: 1');
    });

    it('decrements count when - button is clicked', () => {        
        const countElement = screen.getByText(/count/i);
        const decrementButton = screen.getByText(/-/i);
        fireEvent.click(decrementButton);
        expect(countElement).toHaveTextContent('Count: -1');
    });
});