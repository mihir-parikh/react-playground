import { useState } from "react";
import Greeting from "./Greeting/Greeting";

const ToggleGreeting = () => {
    const [ isActive, setIsActive ] = useState(false);

    return (
        <div>
            <button onClick={() => setIsActive(!isActive)}>Toggle</button>
            <Greeting isActive={isActive} />
        </div>
    );
};

export default ToggleGreeting;