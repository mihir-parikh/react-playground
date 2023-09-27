import { render } from "@testing-library/react";
import ReverseString from "./ReverseString";

describe("ReverseString testsuite", () => {
    it("should render the reversed string", () => {
        render(<ReverseString />);

        const reverseStringElement = document.querySelector("#reverse-string");
        const reverseString = reverseStringElement?.innerHTML.split(": ")[1];
        expect(reverseString).toBe("dlroW olleH");        
    });
});