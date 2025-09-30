import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from "@testing-library/user-event";

test("renders Button with label and handles click", async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn(); // use jest.fn() so we can count calls
    render(<Button testid="test-button" label="Test Button" onClick={handleClick} />);

    const buttonElement = screen.getByTestId("test-button");
    expect(buttonElement).toBeInTheDocument();

    await user.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
