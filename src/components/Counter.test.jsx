// src/components/Counter.test.jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

test("renders and increments", async () => {
    render(<Counter />);
    expect(screen.getByLabelText(/count/i)).toHaveTextContent("0");
    await userEvent.click(screen.getByRole("button", { name: /increment/i }));
    expect(screen.getByLabelText(/count/i)).toHaveTextContent("1");
    // await userEvent.click(screen.getByLabelText(/decrement/i));
    // expect(screen.getByLabelText(/count/i)).toHaveTextContent("-1");
});

test("Renders and decrements twice", async () => {
    render(<Counter />);
    expect(screen.getByLabelText(/count/i)).toHaveTextContent("0");
    await userEvent.click(screen.getByLabelText(/decrement/i));
    expect(screen.getByLabelText(/count/i)).toHaveTextContent("-2");
    await userEvent.click(screen.getByLabelText(/decrement/i));
    expect(screen.getByLabelText(/count/i)).toHaveTextContent("-4");
});
