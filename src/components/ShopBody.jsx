import React from "react";
import { Link } from "react-router-dom";

function ShopBody({ products }) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group"
            >
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopBody;
