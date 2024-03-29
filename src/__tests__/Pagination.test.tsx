import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import Pagination from "../components/UI Kit/Pagination/Pagination";

describe("Rendering Pagination component", () => {
  test("render component", () => {
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 1;
    const onPageChange = jest.fn();
    const totalPagesVisible = 3;

    const { container } = render(
      <Pagination
        pages={pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPagesVisible={totalPagesVisible}
      />
    );
    const paginationButtons = container.querySelectorAll(".pagination button");
    expect(paginationButtons[0]).toBeDisabled();

    fireEvent.click(paginationButtons[0]);
    expect(onPageChange).not.toHaveBeenCalled();
  });

  test("clicking on 'Next' button", () => {
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 1;
    const onPageChange = jest.fn();
    const totalPagesVisible = 3;

    const { container } = render(
      <Pagination
        pages={pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPagesVisible={totalPagesVisible}
      />
    );

    const paginationButtons = container.querySelectorAll(".pagination button");
    fireEvent.click(paginationButtons[pages.length - 1]);
    expect(onPageChange).toHaveBeenCalled();
  });
  test("clicking on 'Prev' button", () => {
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 1;
    const onPageChange = jest.fn();
    const totalPagesVisible = 3;

    const { container } = render(
      <Pagination
        pages={pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPagesVisible={totalPagesVisible}
      />
    );

    const paginationButtons = container.querySelectorAll(".pagination button");
    fireEvent.click(paginationButtons[1]);
    expect(onPageChange).toHaveBeenCalled();
  });

  test("active class", () => {
    const pages = [1, 2, 3, 4, 5];
    const currentPage = 1;
    const onPageChange = jest.fn();
    const totalPagesVisible = 3;

    const { container } = render(
      <Pagination
        pages={pages}
        currentPage={currentPage}
        onPageChange={onPageChange}
        totalPagesVisible={totalPagesVisible}
      />
    );

    const paginationButtons = container.querySelectorAll(".pagination button");
    expect(paginationButtons[1].parentNode).toHaveClass("active");
  });
});
