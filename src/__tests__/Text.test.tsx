import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Text from "../components/UI Kit/Text/Text";

describe("Test component Text", () => {
  test("rendering component text_h1 ", () => {
    const { getByTestId } = render(<Text h1>Hey</Text>);
    const text_h1 = getByTestId("text_h1");
    expect(text_h1).toBeInTheDocument();
  });

  test("type text h1", () => {
    const { getByTestId } = render(<Text h1>Hey</Text>);
    const text_h1 = getByTestId("text_h1");
    expect(text_h1.tagName).toBe("H1");
  });

  test("type text h2", () => {
    const { getByTestId } = render(<Text h2>Hey</Text>);
    const text_h2 = getByTestId("text_h2");
    expect(text_h2.tagName).toBe("H2");
  });

  test("type text h3", () => {
    const { getByTestId } = render(<Text h3>Hey</Text>);
    const text_h3 = getByTestId("text_h3");
    expect(text_h3.tagName).toBe("H3");
  });

  test("type text body1", () => {
    const { getByTestId } = render(<Text body1>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body1");
  });

  test("type text body2", () => {
    const { getByTestId } = render(<Text body2>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body2");
  });

  test("type text body2_bold", () => {
    const { getByTestId } = render(<Text body2_bold>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body2_bold");
  });

  test("type text body3", () => {
    const { getByTestId } = render(<Text body3>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body3");
  });

  test("type text body3_bold", () => {
    const { getByTestId } = render(<Text body3_bold>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body3_bold");
  });

  test("type text body4", () => {
    const { getByTestId } = render(<Text body4>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body4");
  });

  test("type text body4_bold", () => {
    const { getByTestId } = render(<Text body4_bold>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body4_bold");
  });

  test("type text body5", () => {
    const { getByTestId } = render(<Text body5>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body5");
  });

  test("type text body6", () => {
    const { getByTestId } = render(<Text body6>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-body6");
  });

  test("type text caption1", () => {
    const { getByTestId } = render(<Text caption1>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-caption1");
  });

  test("type text caption2", () => {
    const { getByTestId } = render(<Text caption2>Hey</Text>);
    const text = getByTestId("text");
    expect(text).toHaveClass("text-caption2");
  });
});
