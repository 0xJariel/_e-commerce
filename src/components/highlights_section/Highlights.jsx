import React from "react";

function Highlights({ productSets }) {
  return (
    <section className="grid grid-cols-2  h-96 bg-red-200 gap-6 mx-auto px-4">
      <div className="max-w-xl w-full justify-self-end l h-96 bg-slate-600">
        {console.log(productSets[0].imageSrc)}
        <img src={productSets[0].imageSrc} alt="" />
      </div>
      <div className="max-w-xl w-full h-96 bg-orange-300">
        <img src={productSets[1].imageSrc} alt="" />
      </div>
    </section>
  );
}

export default Highlights;
