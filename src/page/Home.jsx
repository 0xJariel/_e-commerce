import React from "react";
import Intro from "../components/Intro";
import Popular from "../components/Popular";
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
