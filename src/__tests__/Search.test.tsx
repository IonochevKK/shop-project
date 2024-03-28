import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Search from "../components/UI Kit/Search/Search";

describe("test search component", () => {
  test("Rendering component", () => {
    const { getByTestId } = render(<Search />);
    const search = getByTestId("search");
    expect(search).toBeInTheDocument();
  });

  test("Rendering component with block", () => {
    const { getByTestId } = render(<Search block />);
    const search = getByTestId("search");
    expect(search).toHaveClass("search-block");
  });

  test("Rendering component with prefix", () => {
    const { getByTestId } = render(<Search prefix="123" />);
    const search = getByTestId("prefix");
    expect(search).toBeInTheDocument();
  });

  test("Rendering component with added className", () => {
    const { getByTestId } = render(<Search className="test-class" />);
    const search = getByTestId("search");
    expect(search).toHaveClass("test-class");
  });

  test("Rendering component disabled", () => {
    const { getByTestId } = render(<Search disabled />);
    const search = getByTestId("search");
    expect(search).toBeDisabled();
  });

  test("Rendering component added placeholder", () => {
    const valuePlaceholder = "TestValue";
    const { getByTestId } = render(<Search placeholder={valuePlaceholder} />);
    const search = getByTestId("search");
    expect(search).toHaveAttribute("placeholder", valuePlaceholder);
  });

  test("Rendering component onChange", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Search onChange={onChange} />);
    const search = getByTestId("search");
    fireEvent.change(search, { target: { value: "test" } });
    expect(onChange).toHaveBeenCalled();
  });
});
