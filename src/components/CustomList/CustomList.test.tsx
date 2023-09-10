import { render, screen } from '@testing-library/react';
import CustomList from './CustomList';

describe('CustomList test suite', () => {
    it('renders list items', () => {
        // Mock data
        const items = ['Item 1', 'Item 2', 'Item 3'];

        render(<CustomList items={items} />);

        const listItems = screen.getAllByRole('listitem');

        expect(listItems).toHaveLength(items.length);

        // Check that the items are correctly rendered
        items.forEach((item, index) => {
            expect(listItems[index]).toHaveTextContent(item);
        });
    });
});