import { useState } from "react";
import "./App.css";
import { Button } from "./components/button/Button";
import InputField from "./components/InputField/InputField";
import Counter from "./components/Counter";
import Card from "./components/card/Card";

function App() {
    const [name, setName] = useState("");
    return (
        <div className="App">
            <Button label="Hello World" />
            <InputField
                label="Name"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <Counter />
            <Card title="My Card Title" />
        </div>
    );
}

export default App;
