import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AwesomeCounter from "./AwesomeCounter";

test("it should have the correct initial value when set to 7", () => {
    render(<AwesomeCounter initialValue={7} />);
    const count = screen.queryByText(7);
    expect(count).toBeVisible();
});

test("it should have a default initial value of 0", () => {
    render(<AwesomeCounter />);
    const count = screen.queryByText(0);
    expect(count).toBeVisible();
});

test("it should increase the value correctly when add is clicked once", () => {
    render(<AwesomeCounter initialValue={1}/>);
    const addButton = screen.getByText("Add");
    userEvent.click(addButton);
    const count = screen.queryByText(2);
    expect(count).toBeVisible();
});

test("it should increase the value correctly when add is clicked twice", () => {
    render(<AwesomeCounter initialValue={1}/>);
    const addButton = screen.getByText("Add");
    userEvent.click(addButton);
    userEvent.click(addButton);
    const count = screen.queryByText(3);
    expect(count).toBeVisible();
});

test("it should increase the value correctly when remove is clicked once", () => {
    throw new Error();
});

test("it should increase the value correctly when remove is clicked twice", () => {
    throw new Error();
});

test("it should not allow a negative number when the initial value is 0 and remove is clicked", () => {
    throw new Error();
});