import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

function Intro() {
  return (
    <section className="grid grid-cols-2 content-center h-96 gap-10">
      <div className="grid max-w-md content-center justify-self-end">
        <div className="text-3xl">Gray Wing</div>
        <div className="text-lg">Kpheno</div>
        <div className="text-base pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate,
          enim totam eius eum ratione debitis modi assumenda est sit, maxime
          cumque qui natus tenetur id magni dignissimos rerum odio. Vitae!
        </div>
        <a className="text-base font-medium underline pt-2">Link Here</a>
      </div>
      <div className="bg-slate-600 max-w-md content-center h-72"></div>
    </section>
  );
}

export default Intro;
