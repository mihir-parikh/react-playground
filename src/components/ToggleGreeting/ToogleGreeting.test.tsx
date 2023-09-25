import { fireEvent, render } from "@testing-library/react";
import ToggleGreeting from "./ToggleGreeting";

describe('ToggleGreeting component test suite', () => {
    beforeEach(() => {
        render(<ToggleGreeting />);
    });

    it('should render the button, but not the greeting by default', () => {        
        const button = document.querySelector('button');
        // Assert
        expect(button).toBeInTheDocument();

        const greeting = document.querySelector('h4');
        // Assert
        expect(greeting).not.toBeInTheDocument();
    });

    it('toggles the greeting when the button is clicked', () => {
        // Arrange
        const button = document.querySelector('button');
        // Act
        fireEvent.click(button);

        const greeting = document.querySelector('h4');
        // Assert
        expect(greeting).toBeInTheDocument();

        // Act
        fireEvent.click(button);
        expect(greeting).not.toBeInTheDocument();
    });
});