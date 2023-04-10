import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("Screen", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(6);
    screen.getByRole("spinbutton");
    screen.getByText("Basic Calculator made with React");
    screen.getByText("0");
});

test("Testing Add Operation", () => {
    render(<App />);
    const input = screen.getByRole("spinbutton");
    const buttons = screen.getAllByRole("button");
    fireEvent.change(input, { target: { value: 45 } });
    expect(input.value).toEqual("45");
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[0]);
    screen.getByText("90");
    fireEvent.click(buttons[4]);
    expect(input.value).toEqual("");
    fireEvent.click(buttons[5]);
    screen.getByText("0");
});
