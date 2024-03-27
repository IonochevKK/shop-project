import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import DropDown from "../components/UI Kit/DropDown/DropDown";

describe("DropDown Component", () => {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  test("renders default selected option", () => {
    const selectedOption = null;
    const { getByText } = render(
      <DropDown
        options={options}
        selectedOption={selectedOption}
        isOpen={false}
        onToggle={() => {}}
        onSelectOption={() => {}}
      />
    );
    const defaultOption = getByText("Всё");
    expect(defaultOption).toBeInTheDocument();
  });

  test("renders selected option correctly", () => {
    const selectedOption = { value: "1", label: "Option 1" };
    render(
      <DropDown
        options={options}
        selectedOption={selectedOption}
        isOpen={false}
        onToggle={() => {}}
        onSelectOption={() => {}}
      />
    );
    const selectedOptionElements = screen.getAllByText("Option 1");
    expect(selectedOptionElements).toHaveLength(2);
    selectedOptionElements?.forEach((element) => {
      expect((element as HTMLElement).textContent).toBe(selectedOption.label);
    });
  });
  test("render isOpen correctly", () => {
    render(
      <DropDown
        options={options}
        selectedOption={null}
        isOpen={true}
        onToggle={() => {}}
        onSelectOption={() => {}}
      />
    );
    const dropDownArrowUp = screen.getByTestId("dropDownArrowUp");
    expect(dropDownArrowUp).toBeInTheDocument();
  });

  test("onToggle click Function", () => {
    const onToggle = jest.fn();
    render(
      <DropDown
        options={options}
        selectedOption={null}
        isOpen={true}
        onToggle={onToggle}
        onSelectOption={() => {}}
      />
    );
    const dropDown = screen.getByTestId("dropDown");
    fireEvent.click(dropDown);
    expect(onToggle).toHaveBeenCalled();
  });

  test("onSelectOption test", () => {
    const onSelectOption = jest.fn();
    render(
      <DropDown
        options={options}
        selectedOption={null}
        isOpen={true}
        onToggle={() => {}}
        onSelectOption={onSelectOption}
      />
    );
    const option = screen.getAllByText("Option 1")[0];
    fireEvent.click(option);
    expect(onSelectOption).toHaveBeenCalled();
  });
});
