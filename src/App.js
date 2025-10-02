import { useState } from "react";
import "./App.css";
import { Button } from "./components/button/Button";
import InputField from "./components/InputField/InputField";
import Counter from "./components/Counter";
import Card from "./components/card/Card";
import StatefulForm from "./components/ActionState";
import Parent from "./components/Callback";
import SearchList from "./components/SearchList";

function App() {
    const [name, setName] = useState("");
    return (
        <div className="App" style={{ padding: "30px", display: "grid", gap: "20px" }}>
            <div>
                <Button label="Hello World" />
            </div>
            <InputField
                label="Name"
                name="name"
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
                value={name}
            />
            <Counter />
            <Card title="My Card Title" content={"Card short description"} />
            <StatefulForm />
            <Parent />
            <SearchList />
        </div>
    );
}

export default App;
