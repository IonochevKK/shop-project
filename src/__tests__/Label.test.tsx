import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Label from "../components/UI Kit/Label/Label";

describe("Test Label component", () => {
  test("rendering commponent label with children", () => {
    const { getByTestId } = render(<Label>Test label</Label>);
    const label = getByTestId("label");
    expect(label).toBeInTheDocument();
  });

  test("rendering label type successs", () => {
    const { getByTestId } = render(<Label type="success">Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-success");
  });

  test("rendering label type warn", () => {
    const { getByTestId } = render(<Label type="warn">Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-warn");
  });

  test("rendering label type danger", () => {
    const { getByTestId } = render(<Label type="danger">Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-danger");
  });

  test("rendering label size large", () => {
    const { getByTestId } = render(<Label size="large">Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-large");
  });

  test("rendering label size medium", () => {
    const { getByTestId } = render(<Label size="medium">Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-medium");
  });

  test("rendering label size small", () => {
    const { getByTestId } = render(<Label size="small">Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-small");
  });

  test("rendering label typeCards curs", () => {
    const { getByTestId } = render(<Label typeCards="curs">Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-curs");
  });

  test("rendering label typeCards price", () => {
    const { getByTestId } = render(<Label typeCards="price">Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-price");
  });

  test("rendering label sizeTypeCards smallCard", () => {
    const { getByTestId } = render(
      <Label sizeTypeCards="smallCard">Test label</Label>
    );
    const label = getByTestId("label");
    expect(label).toHaveClass("label-smallCard");
  });

  test("rendering label sizeTypeCards largeCard", () => {
    const { getByTestId } = render(
      <Label sizeTypeCards="largeCard">Test label</Label>
    );
    const label = getByTestId("label");
    expect(label).toHaveClass("label-largeCard");
  });

  test("rendering component with block", () => {
    const { getByTestId } = render(<Label block>Test label</Label>);
    const label = getByTestId("label");
    expect(label).toHaveClass("label-block");
  });
});
