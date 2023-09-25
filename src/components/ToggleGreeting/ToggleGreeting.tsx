import { useState } from "react";

const ToggleGreeting = () => {
    // Store the data in a data store
    const [ visibility, setVisibility ] = useState(false);

    return (
        <div>
            {/* When there is a change in the state data, the component will be re-rendered */}
            <button onClick={() => setVisibility(!visibility)}>Toggle an Element</button>
            {visibility && <h4>Hello World</h4>}
        </div>
    );
};

export default ToggleGreeting;