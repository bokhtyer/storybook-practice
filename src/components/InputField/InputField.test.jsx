import { render, screen } from "@testing-library/react";
import InputField from "./InputField";

test("renders InputField with placeholder", () => {
    render(<InputField placeholder="Enter text here" />);
    expect(screen.getByPlaceholderText("Enter text here")).toBeInTheDocument();
    expect(screen.queryByText("Value:")).not.toBeInTheDocument();
});
