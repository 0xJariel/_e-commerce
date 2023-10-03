import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

function Intro({ displayProduct }) {
  return (
    <section className="grid grid-cols-2 content-center h-96 gap-10">
      <div className="grid max-w-md content-center justify-self-end">
        <div className="text-3xl pb-2">{displayProduct.name}</div>
        <div className="text-lg">
          Because your salt deserves to live in luxury
        </div>
        <div className="text-base pt-4">{displayProduct.altDescription}</div>
        <Link
          to={`product/${displayProduct.id}`}
          key={displayProduct.id}
          className="group font-bold underline pt-5"
        >
          Buy Me!
        </Link>{" "}
      </div>
      <div className="bg-slate-600 max-w-md content-center h-72 overflow-hidden relative">
        <img
          src={displayProduct.imageSrc}
          alt=""
          className="bottom-0 absolute overflow-hidden w-full"
        />
      </div>
    </section>
  );
}

export default Intro;
