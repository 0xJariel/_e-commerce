import React from "react";
import { AiOutlineShoppingCart, AiOutlineProfile } from "react-icons/ai";
import { FaShoppingCart, FaUserAstronaut } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="grid grid-cols-3 w-full font-semibold font text-xl pt-8 max-w-6xl justify-self-center">
      <div className="flex gap-4 align-bottom">
        <div>Home</div>
        <div>Shop</div>
      </div>
      <div className="grid justify-center align-bottom underline">FURNITTO</div>
      <div className="flex gap-2 justify-end ">
        <div className="">
          <FaUserAstronaut />
        </div>
        <div>
          <FaShoppingCart />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
