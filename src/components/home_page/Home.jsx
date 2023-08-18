import React from "react";
import Intro from "../intro_section/Intro";
import Highlights from "../highlights_section/Highlights";
import Popular from "../popular_section/Popular";
import Blog from "../blog_section/blog";

function Home() {
  return (
    <>
      <Intro />
      <Highlights />
      <Popular />
      <Blog />
    </>
  );
}

export default Home;
