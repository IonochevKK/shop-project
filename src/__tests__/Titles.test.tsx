import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Title from "../components/UI Kit/Titles/TItle";
import Text from "../components/UI Kit/Text/Text";
import Divider from "../components/UI Kit/Divider/Divider";

describe("Tests Titles component", () => {
  test("Render component", () => {
    const { getByTestId } = render(
      <Title type="flex">
        <Text h2>Привет...</Text>
        <Divider type="gray" />
      </Title>
    );
    const title = getByTestId("title");
    expect(title).toBeInTheDocument();
  });

  test("type component flex", () => {
    const { getByTestId } = render(
      <Title type="flex">
        <Text h2>Привет...</Text>
        <Divider type="gray" />
      </Title>
    );
    const title = getByTestId("title");
    expect(title).toHaveClass("divider-flex");
  });

  test("type component flexText", () => {
    const { getByTestId } = render(
      <Title type="flexText" value="Смотреть программу">
        <Text h2>Привет...</Text>
        <Divider type="gray" />
      </Title>
    );
    const title = getByTestId("title");
    expect(title).toHaveClass("divider-flexText");
  });
});
