import React from "react";
import { LIMIT } from "../utils/constants";
import "./Pagination.css";

function Pagination({ data, offset1, offset2, handlePagination }) {
  return (
    <div className="pagination__section">
      <button
        className="pagination__btn__previous"
        onClick={() => handlePagination("prev")}
        disabled={offset1 <= 0}
      >
        {"<"}
      </button>
      Page {offset1 === 0 ? 1 : Math.floor(offset1 / LIMIT) + 1}/
      {Math.ceil(data.length / LIMIT)}
      <button
        className="pagination__btn__next"
        onClick={() => handlePagination("next")}
        disabled={offset2 > data.length - 1}
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
