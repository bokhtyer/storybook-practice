import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders Card with title", () => {
    render(<Card title="My Card Title" />);
    expect(screen.getByText("My Card Title")).toBeInTheDocument();
});
