import React, { useState, useCallback } from "react";

const Child = React.memo(({ handleClick }) => {
    console.log("Child re-rendered");
    return <button onClick={handleClick}>Click Me</button>;
});

function Parent() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    return (
        <div>
            <h1>Count: {count}</h1>
            <Child handleClick={increment} />
        </div>
    );
}

export default Parent;
