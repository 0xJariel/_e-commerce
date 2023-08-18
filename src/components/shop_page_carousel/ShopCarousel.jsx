import { useState } from "react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function ShopCarousel() {
  let [pageNumber, setPageNumber] = useState(1);

  const goToNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  const goToPreviousPage = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <div className="flex mx-auto gap-4 text-4xl">
      <FaChevronCircleLeft onClick={goToPreviousPage} />
      {pageNumber}
      <FaChevronCircleRight onClick={goToNextPage} />
    </div>
  );
}
