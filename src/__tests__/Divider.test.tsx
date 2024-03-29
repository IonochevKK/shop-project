import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Divider from "../components/UI Kit/Divider/Divider";

describe("Test Divider", () => {
  test("render divider", () => {
    const { container } = render(<Divider type="gray" />);
    const divider = container.querySelector(".divider");
    expect(divider).toBeInTheDocument();
  });

  test("render type blue divider", () => {
    const { container } = render(<Divider type="blue" />);
    const divider = container.querySelector(".divider");
    expect(divider).toHaveClass("divider-blue");
  });

  test("render type gray divider", () => {
    const { container } = render(<Divider type="gray" />);
    const divider = container.querySelector(".divider");
    expect(divider).toHaveClass("divider-gray");
  });
});
