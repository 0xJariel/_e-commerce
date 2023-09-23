import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineProfile } from "react-icons/ai";
import { FaShoppingCart, FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ cart }) {
  const [cartQty, setCartQty] = useState();

  useEffect(() => {
    setCartQty(cart.length);
  }, [cart]);

  return (
    <nav className="grid grid-cols-3 w-full font-semibold font text-xl pt-8 max-w-6xl justify-self-center">
      <div className="flex gap-4 align-bottom">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>
      <div className="grid justify-center align-bottom underline">FURNITTO</div>
      <div className="flex gap-2 justify-end ">
        {/* <div className="">
          <FaUserAstronaut />
        </div> */}
        <Link to="/cart" className="flex">
          <FaShoppingCart />
          {cartQty && <div>{cart.length}</div>}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
