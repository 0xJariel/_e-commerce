import React from "react";
import Intro from "../intro_section/Intro";
import Highlights from "../highlights_section/Highlights";
import Popular from "../popular_section/Popular";
import Blog from "../blog_section/blog";
import { useOutletContext } from "react-router-dom";

function Home() {
  //must be extracted in the order they are first made.
  //names are irrelevant
  const [products, productSets, displayProduct] = useOutletContext();

  return (
    <>
      <Intro displayProduct={displayProduct} />
      {/* <Highlights productSets={productSets} /> */}
      <Popular products={products} />
      {/* <Blog /> */}
    </>
  );
}

export default Home;
