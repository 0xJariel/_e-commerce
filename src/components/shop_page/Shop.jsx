import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useOutletContext } from "react-router-dom";
import ShopCarousel from "../shop_page_carousel/ShopCarousel";
import ShopBody from "../shop_body/ShopBody";
import CategoryFilter from "../category_filter/CategoryFilter";

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
