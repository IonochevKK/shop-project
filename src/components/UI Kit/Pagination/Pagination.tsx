import classNames from "classnames";
import React from "react";
import "./pagination.scss";
import { getVisiblePages } from "../../../utils/getVisiblePages";
import ButtonRightSvg from "../../../../public/svg/pagination_button_right.svg?react";
import ButtonLeftSvg from "../../../../public/svg/pagination_button_left.svg?react";
import Text from "../Text/Text";
interface PaginationProps {
  pages: number[];
  currentPage: number;
  onPageChange: (page: number) => void;
  totalPagesVisible: number;
}
const Pagination: React.FC<PaginationProps> = ({
  pages,
  currentPage,
  onPageChange,
  totalPagesVisible,
}) => {
  const totalPages = pages.length;
  const visiblePages = getVisiblePages(
    currentPage,
    totalPages,
    totalPagesVisible
  );

  const renderPageItem = (page: number) => (
    <li
      key={page}
      className={classNames("page-item", {
        activePagination: currentPage === page,
      })}
    >
      <button className="page-link" onClick={() => onPageChange(page)}>
        <Text body3>{page}</Text>
      </button>
    </li>
  );

  return (
    <div>
      <ul className="pagination">
        <li className="page-item arrow">
          <button
            className="page-link "
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ButtonLeftSvg />
          </button>
        </li>
        {visiblePages.map(renderPageItem)}
        <li className="page-item arrow">
          <button
            className="page-link "
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ButtonRightSvg />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
