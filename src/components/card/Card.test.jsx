import { render, screen } from "@testing-library/react";
import Card from "./Card";
import "@testing-library/jest-dom";

test("renders Card with title", () => {
    const { asFragment } = render(<Card title="My Card Title A" content="Hello content" alignment="center" />);
    expect(screen.getByText("My Card Title A")).toBeInTheDocument();
    expect(screen.getByText("Hello content")).toBeInTheDocument();
    expect(screen.getByTestId("card-item")).toHaveStyle("text-align: center");

    expect(asFragment()).toMatchSnapshot();
});
