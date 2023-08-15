import React from 'react';
import cn from "classnames";

interface PaginationProps {
  page: number;
  pages: number;
  onClick: (page: number) => void; // Changed type here to always expect a number
}

const Pagination: React.FC<PaginationProps> = ({ page, pages, onClick }) => {
  const hasPrev = page > 1;
  const hasNext = page < pages;

  const onClickChangePage = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = event.currentTarget as HTMLButtonElement;
    let nextPage: number;
    switch (target.innerText) {
      case "Prev":
        nextPage = page - 1;
        break;
      case "Next":
        nextPage = page + 1;
        break;
      default:
        nextPage = parseInt(target.innerText);
        if (isNaN(nextPage)) {
          return; // Ensure we don't continue if the parsed value isn't a number
        }
        break;
    }
    onClick(nextPage);
  };

  return (
    <div className="flex justify-center">
      <nav aria-label="Page navigation">
        <ul className="flex space-x-2">
          <li
            className={cn({
              "opacity-50": !hasPrev,
            })}
          >
            <button
              className="px-4 py-2 border rounded"
              onClick={onClickChangePage}
              disabled={!hasPrev}
            >
              Prev
            </button>
          </li>

          {[...Array(pages)].map((_, idx) => (
            <li
              key={idx}  // added key for list items
              className={cn({
                "bg-blue-500 text-white opacity-50": page === idx + 1,
              })}
            >
              <button className="px-4 py-2 border rounded" onClick={onClickChangePage}>
                {idx + 1}
              </button>
            </li>
          ))}

          <li
            className={cn({
              "opacity-50": !hasNext,
            })}
          >
            <button
              className="px-4 py-2 border rounded"
              onClick={onClickChangePage}
              disabled={!hasNext}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
