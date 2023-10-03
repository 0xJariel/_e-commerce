import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Popular = ({ products }) => {
  const createPopularList = () => {
    let fullList;
    let popularList = [];

    fullList = products.map((product) => (
      <Link to={`/product/${product.id}`} key={product.id} className="group">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={product.imageSrc} alt={product.imageAlt} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {product.name}
              {/* <div className="badge badge-secondary">NEW</div> */}
            </h2>
            <p>{product.description}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{product.type}</div>
              {/* <div className="badge badge-outline">Products</div> */}
            </div>
          </div>
        </div>
      </Link>
    ));

    for (let i = 0; i < 6; i++) {
      popularList.push(fullList[i]);
      console.log(popularList);
    }

    return popularList;
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl pb-8">Trending Products</h1>
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {createPopularList()}
        </div>
      </div>
    </div>
  );
};

export default Popular;

{
  /* <>
  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
    <img
      src={product.imageSrc}
      alt={product.imageAlt}
      className="h-full w-full object-cover object-center group-hover:opacity-75"
    />
  </div>
  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
  <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
</>; */
}
