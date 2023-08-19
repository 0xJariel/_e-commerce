import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link, useOutletContext } from "react-router-dom";
import ShopCarousel from "../shop_page_carousel/ShopCarousel";
import ShopBody from "../shop_body/ShopBody";
import ShopCategories from "../shop_categories/ShopCategories";
import CategoryFiler from "../category_filter/CategoryFilter";

function Shop() {
  const [products] = useOutletContext();
  return (
    <>
      <CategoryFiler />
      <ShopBody products={products} />
      <ShopCarousel />
    </>
  );
}

export default Shop;
