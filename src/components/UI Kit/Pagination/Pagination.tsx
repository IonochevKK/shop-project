import classNames from "classnames";
import React from "react";
import "./pagination.scss";
import { getVisiblePages } from "../../../utils/getVisiblePages";
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
      className={classNames("page-item", { active: currentPage === page })}
    >
      <button
        className="page-link"
        onClick={() => onPageChange(page)}
      >
        {page}
      </button>
    </li>
  );

  return (
    <div>
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            &laquo;
          </button>
        </li>
        {visiblePages.map(renderPageItem)}
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
