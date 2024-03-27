import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import CheckBox from "../components/UI Kit/CheckBox/CheckBox";

describe("CheckBox Component", () => {
  test("renders checkbox with label", () => {
    const { getByText, getByLabelText } = render(
      <CheckBox type="radio">Test CheckBox</CheckBox>
    );
    expect(getByText("Test CheckBox")).toBeInTheDocument();
    expect(getByLabelText("Test CheckBox")).toBeInTheDocument();
  });

  test("checkbox state changes", () => {
    const { getByLabelText } = render(
      <CheckBox type="radio">Test CheckBox</CheckBox>
    );
    const checkBox = getByLabelText("Test CheckBox");
    expect(checkBox).not.toBeChecked();
    fireEvent.click(checkBox);
    expect(checkBox).toBeChecked();
  });

  test("calls onChange handler when checkbox state changes", () => {
    const handleChange = jest.fn();
    const { getByLabelText } = render(
      <CheckBox type="radio" onChange={handleChange}>
        Test CheckBox
      </CheckBox>
    );
    const checkBox = getByLabelText("Test CheckBox");
    fireEvent.click(checkBox);
    expect(handleChange).toHaveBeenCalled();
  });

  test("disabled checkbox", () => {
    const { getByLabelText } = render(
      <CheckBox disabled type="radio">
        Test CheckBox
      </CheckBox>
    );
    const checkBox = getByLabelText("Test CheckBox") as HTMLInputElement;
    expect(checkBox).toBeDisabled;
  });

  test("renders radio button with label", () => {
    const { getByLabelText } = render(
      <CheckBox type="radio">Test Radio</CheckBox>
    );
    expect(getByLabelText("Test Radio").parentNode).toHaveClass(
      "checkbox-radio"
    );
  });

  test("renders checkbox with label", () => {
    const { getByLabelText } = render(
      <CheckBox type="checkbox">Test CheckBox</CheckBox>
    );
    expect(getByLabelText("Test CheckBox").parentNode).toHaveClass(
      "checkbox-checkbox"
    );
  });

  test("add ClassNames", () => {
    const { getByLabelText } = render(
      <CheckBox classnames="test-class" type="radio">
        Test ClassNames
      </CheckBox>
    );
    expect(getByLabelText("Test ClassNames").parentNode).toHaveClass(
      "test-class"
    );
  });

  test("renders radio button with attribute value and label", () => {
    const name = "testRadio";
    const value = "radioValue";
    const { getByLabelText } = render(
      <CheckBox type="radio" name={name} value={value}>
        Test Radio
      </CheckBox>
    );
    const radioInput = getByLabelText("Test Radio");
    expect(radioInput).toHaveAttribute("name", name);
    expect(radioInput).toHaveAttribute("value", value);
  });

  test("renders checkbox button with attribute value and label", () => {
    const name = "testCheckBox";
    const value = "checkBoxValue";
    const { getByLabelText } = render(
      <CheckBox type="radio" name={name} value={value}>
        Test checkbox
      </CheckBox>
    );
    const radioInput = getByLabelText("Test checkbox");
    expect(radioInput).toHaveAttribute("name", name);
    expect(radioInput).toHaveAttribute("value", value);
  });

  test("render checkbox without label", () => {
    const { container } = render(<CheckBox type="checkbox" />);
    const label = container.querySelector("label");
    expect(label?.textContent).toBe("");
  });
});
