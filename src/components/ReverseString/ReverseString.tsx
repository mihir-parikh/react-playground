const ReverseString = () => {
    const regularString = "Hello World";
    const reverseString = regularString.split("").reverse().join("");

    return (
        <div>
            <p id="regular-string">Regular String: {regularString}</p>
            <p id="reverse-string">Reverse String: {reverseString}</p>
        </div>
    );
};

export default ReverseString;