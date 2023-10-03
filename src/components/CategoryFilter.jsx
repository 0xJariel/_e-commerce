import React from "react";
import { useOutletContext } from "react-router-dom";
import getData from "../data/data";

function CategoryFilter() {
  return (
    <div className="flex gap-8 justify-center pt-24 pb-8">
      <input
        type="radio"
        aria-label="All"
        className="btn"
        name="filter"
        onClick={() => {
          getData("mug");
          console.log("hi");
        }}
      />
      <input type="radio" aria-label="Misc" className="btn" name="filter" />
      <input type="radio" aria-label="Bowls" className="btn" name="filter" />
      <input type="radio" aria-label="Mugs" className="btn" name="filter" />
    </div>
  );
}

export default CategoryFilter;
