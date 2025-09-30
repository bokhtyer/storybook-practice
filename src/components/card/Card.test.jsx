import { render, screen } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";

test("renders Card with title", () => {
    render(<Card title="My Card Title" content={"Hello content"} />);
    expect(screen.getByText("My Card Title")).toBeInTheDocument();
    expect(screen.getByText("Hello content")).toBeInTheDocument();
});
