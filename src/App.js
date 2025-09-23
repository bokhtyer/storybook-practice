import { useState } from "react";
import "./App.css";
import { Button } from "./components/button/Button";
import InputField from "./components/InputField/InputField";

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
        </div>
    );
}

export default App;
