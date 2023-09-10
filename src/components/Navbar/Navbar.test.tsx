import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar test suite', () => {
    beforeEach(() => {
        // Render the Navbar component with the MemoryRouter provided to it
        render(<Navbar />, { wrapper: MemoryRouter });
    });

    it('renders home link', () => {
        const homeLink = screen.getByRole('link', { name: "Home" });
        expect(homeLink).toBeInTheDocument();
    });

    it('renders custom list link', () => {
        const customListLink = screen.getByRole('link', { name: "Custom List" });
        expect(customListLink).toBeInTheDocument();
    });
});