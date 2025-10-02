import React, { useState, useDeferredValue, useMemo, useId } from "react";

const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

function SearchList() {
    const [query, setQuery] = useState("");
    const deferredQuery = useDeferredValue(query); // defer typing update

    // heavy filter calculation
    const filteredItems = useMemo(() => {
        return items.filter((item) => item.toLowerCase().includes(deferredQuery.toLowerCase()));
    }, [deferredQuery]);

    const passwordHintId = useId();

    return (
        <div>
            <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
            <ul>
                {filteredItems.slice(0, 100).map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchList;
