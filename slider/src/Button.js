import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Button({ index, setIndex }) {
  return (
    <>
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <FiChevronLeft />
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <FiChevronRight />
      </button>
    </>
  );
}

export default Button;
