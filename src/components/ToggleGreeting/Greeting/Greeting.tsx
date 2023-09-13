const Greeting = (props) => {
    const { isActive } = props;

    return <p id="greeting" style={isActive ? { display: 'none' } : { display: 'block' }}>Hello, world!</p>;
};

export default Greeting;