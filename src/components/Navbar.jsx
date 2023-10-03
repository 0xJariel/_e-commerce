import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineProfile } from "react-icons/ai";
import { FaShoppingCart, FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const [cartQty, setCartQty] = useState();

  useEffect(() => {
    setCartQty(cart.length);
  }, [cart]);

  function calculateSubtotalCost(items) {
    // Ensure that the items array is not empty
    if (!items || items.length === 0) {
      return 0; // If there are no items, the total cost is 0
    }

    // Use the reduce method to calculate the total cost
    const subtotal = items.reduce((accumulator, currentItem) => {
      // Ensure that each item has a valid price and quantity
      if (
        typeof currentItem.price === "number" &&
        typeof currentItem.qty === "number"
      ) {
        // Multiply the price and quantity for the current item and add it to the accumulator
        return accumulator + currentItem.price * currentItem.qty;
      } else {
        // If an item has invalid price or quantity, skip it and continue with the accumulator
        return accumulator;
      }
    }, 0); // Start with an initial accumulator value of 0

    return subtotal;
  }

  return (
    <nav
      className="sticky navbar bg-base-100 grid grid-cols-3 w-full font-semibold text-xl justify-self-center shadow-md px-14"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "white",
      }}
    >
      <div className="gap-4">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className=" justify-center underline">FURNITTO</div>
      <div className="justify-end">
        {/* <div className="">
          <FaUserAstronaut />
        </div> */}

        <div className="flex">
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {cart.length}
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">{cart.length} Items</span>
                  <span className="text-info">
                    Subtotal: ${calculateSubtotalCost(cart)}
                  </span>
                  <div className="card-actions">
                    <Link to="/cart">
                      <button className="btn btn-primary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <FaShoppingCart />
          {cartQty && <div>{cart.length}</div>} */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
