import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useOutletContext } from "react-router-dom";
import ShopCarousel from "../components/ShopCarousel";
import ShopBody from "../components/ShopBody";
import CategoryFilter from "../components/CategoryFilter";

function Shop() {
  const [products] = useOutletContext();
  return (
    <>
      <CategoryFilter />
      <ShopBody products={products} />
      {/* <ShopCarousel /> */}
    </>
  );
}

export default Shop;
