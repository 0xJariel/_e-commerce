import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Intro({ displayProduct }) {
  return (
    <section className="grid grid-cols-2 content-center h-96 gap-10">
      <div className="grid max-w-md content-center justify-self-end">
        <div className="text-3xl">{displayProduct.name}</div>
        <div className="text-lg">Kpheno</div>
        <div className="text-base pt-4">{displayProduct.description}</div>
        <a className="text-base font-medium underline pt-2">Link Here</a>
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
