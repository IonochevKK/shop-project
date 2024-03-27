import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import DataPicker from "../components/UI Kit/DataPicker/DataPicker";

describe("Test DataPicker", () => {
  test("render Datapicker", () => {
    const { getByTitle } = render(<DataPicker />);
    const input = getByTitle("date");
    expect(input).toBeInTheDocument();
  });

  test("render Datapicker with block", () => {
    const { getByTitle } = render(<DataPicker block />);
    const input = getByTitle("date");
    expect(input).toHaveClass("dataPicker-block");
  });

  test("render DataPicker with disabled", () => {
    const { getByTitle } = render(<DataPicker disabled />);
    const disabled = getByTitle("date");
    expect(disabled).toBeDisabled();
  });

  test("render DataPicker with postfix", () => {
    const { getByText } = render(<DataPicker postfix="postfix" />);
    const postfix = getByText("postfix");
    expect(postfix).toBeInTheDocument();
  });
});
