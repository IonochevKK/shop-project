import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Input from "../components/UI Kit/Input/Input";

describe("test Input component", () => {
  test("render input correctly", () => {
    const { getByTestId } = render(<Input type="text" />);
    const input = getByTestId("input");
    expect(input).toBeInTheDocument();
  });

  test("render type input text", () => {
    const { getByTestId } = render(<Input type="text" />);
    const input = getByTestId("input");
    expect(input).toHaveClass("custom-text");
  });

  test("render type input tel", () => {
    const { getByTestId } = render(<Input type="tel" />);
    const input = getByTestId("input");
    expect(input).toHaveClass("custom-tel");
  });

  test("render type input email", () => {
    const { getByTestId } = render(<Input type="email" />);
    const input = getByTestId("input");
    expect(input).toHaveClass("custom-email");
  });

  test("render type input bigText", () => {
    const { getByTestId } = render(<Input type="bigText" />);
    const input = getByTestId("input");
    expect(input).toHaveClass("custom-bigText");
  });

  test("render add classname input", () => {
    const { getByTestId } = render(
      <Input type="text" className="test-input" />
    );
    const input = getByTestId("input");
    expect(input).toHaveClass("test-input");
  });

  test("render placeholder text", () => {
    const value: string = "Enter text";
    const { getByTestId } = render(<Input type="text" placeholder={value} />);
    const input = getByTestId("input");
    expect(input).toHaveAttribute("placeholder", value);
  });

  test("add className block", () => {
    const { getByTestId } = render(<Input type="text" block />);
    const input = getByTestId("input");
    expect(input).toHaveClass("custom-block");
  });

  test("disabled input", () => {
    const { getByTestId } = render(<Input type="text" disabled />);
    const input = getByTestId("input");
    expect(input).toBeDisabled();
  });
  test("err input", () => {
    const { getByTestId } = render(<Input type="text" err />);
    const input = getByTestId("input");
    const err = getByTestId("err");
    expect(input).toHaveClass("custom-err");
    expect(err).toBeInTheDocument();
  });

  test(" onChange input function", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input type="text" onChange={onChange} />);
    const input = getByTestId("input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
  });

  test("render postfix when type tel", () => {
    const valuePostfix: string = "Hey";
    const { getByTestId } = render(<Input type="tel" postfix={valuePostfix} />);
    const postfix = getByTestId("postfix");
    expect(postfix).toBeInTheDocument();
  });
});
