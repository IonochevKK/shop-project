import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Button from "../components/UI Kit/Button/Button";

describe("Button component", () => {
  test("renders button with children", () => {
    const { getByText } = render(<Button>Submit</Button>);
    expect(getByText("Submit")).toBeInTheDocument();
  });

  test("renders button with icon", () => {
    const { getByTestId } = render(
      <Button icon={<span data-testid="icon" />} type="icon_left" />
    );
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("button onClick callback is called when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click Me</Button>
    );
    fireEvent.click(getByText("Click Me"));
    expect(onClickMock).toHaveBeenCalled();
  });

  test("button is disabled when disabled prop is true", () => {
    const { getByText } = render(<Button disabled>Disabled Button</Button>);
    expect(getByText("Disabled Button")).toBeDisabled();
  });

  test("button has correct additional class when className prop is provided", () => {
    const { getByText } = render(
      <Button className="custom-class">Button</Button>
    );
    expect(getByText("Button")).toHaveClass("custom-class");
  });

  test("Checking for Element Bleeding(block)", () => {
    const { getByText } = render(
      <Button className="button-block">Test</Button>
    );
    expect(getByText("Test")).toHaveClass("button-block");
  });

  test("Checking for Button Type primary", () => {
    const { getByText } = render(<Button type="primary">Test</Button>);
    expect(getByText("Test")).toHaveClass("button-primary");
  });

  test("Checking for Button Type secondary_1", () => {
    const { getByText } = render(<Button type="secondary_1">Test</Button>);
    expect(getByText("Test")).toHaveClass("button-secondary_1");
  });

  test("Checking for Button Type secondary_2", () => {
    const { getByText } = render(<Button type="secondary_2">Test</Button>);
    expect(getByText("Test")).toHaveClass("button-secondary_2");
  });

  test("Checking for Button Type link_center", () => {
    const { getByText } = render(<Button type="link_center">Test</Button>);
    expect(getByText("Test")).toHaveClass("button-link_center");
  });

  test("Checking for Button Type link", () => {
    const { getByText } = render(<Button className="button-link">Test</Button>);
    expect(getByText("Test")).toHaveClass("button-link");
  });

  test("renders button with icon on the left", () => {
    const { getByTestId } = render(
      <Button icon={<span data-testid="icon" />} type="icon_left" />
    );
    expect(getByTestId("icon").parentElement).toHaveClass("button-icon");
    expect(getByTestId("icon").parentElement).toHaveClass("icon-left");
  });

  test("renders button with icon on the right", () => {
    const { getByTestId } = render(
      <Button icon={<span data-testid="icon" />} type="icon_right" />
    );
    expect(getByTestId("icon").parentElement).toHaveClass("button-icon");
    expect(getByTestId("icon").parentElement).toHaveClass("icon-right");
  });
});
