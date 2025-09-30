import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1 aria-label="count">{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>Increment</button>
            <button aria-label="decrement" onClick={() => setCount((c) => c - 2)}>
                Decrement
            </button>
        </div>
    );
}
