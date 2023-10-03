import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { v4 as uuidv4 } from "uuid";
import getData from "./data/data";

function App() {
  const [products, setProducts] = useState(getData());
  const [productSets, setProductSets] = useState([]);

  // const [productSets, setProductSets] = useState([
  //   {
  //     id: uuidv4(),
  //     name: "Bowl Set",
  //     href: "#",
  //     price: 12,
  //     imageSrc: bowlSet,
  //     imageAlt:
  //       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  //     rating: 4,
  //     images: [
  //       {
  //         id: 1,
  //         name: "Angled view",
  //         src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
  //         alt: "Angled front view with bag zipped and handles upright.",
  //       },
  //       // More images...
  //     ],
  //     colors: [
  //       {
  //         name: "Washed Black",
  //         bgColor: "bg-gray-700",
  //         selectedColor: "ring-gray-700",
  //       },
  //       { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
  //       {
  //         name: "Washed Gray",
  //         bgColor: "bg-gray-500",
  //         selectedColor: "ring-gray-500",
  //       },
  //     ],
  //     description: `
  //         <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  //       `,
  //     details: [
  //       {
  //         name: "Features",
  //         items: [
  //           "Multiple strap configurations",
  //           "Spacious interior with top zip",
  //           "Leather handle and tabs",
  //           "Interior dividers",
  //           "Stainless strap loops",
  //           "Double stitched construction",
  //           "Water-resistant",
  //         ],
  //       },
  //       // More sections...
  //     ],
  //   },
  //   {
  //     id: uuidv4(),
  //     name: "Plate Set",
  //     href: "#",
  //     price: 22,
  //     imageSrc: plateSet,
  //     imageAlt:
  //       "Olive drab green insulated bottle with flared screw lid and flat top.",
  //     rating: 4,
  //     images: [
  //       {
  //         id: 1,
  //         name: "Angled view",
  //         src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
  //         alt: "Angled front view with bag zipped and handles upright.",
  //       },
  //       // More images...
  //     ],
  //     colors: [
  //       {
  //         name: "Washed Black",
  //         bgColor: "bg-gray-700",
  //         selectedColor: "ring-gray-700",
  //       },
  //       { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
  //       {
  //         name: "Washed Gray",
  //         bgColor: "bg-gray-500",
  //         selectedColor: "ring-gray-500",
  //       },
  //     ],
  //     description: `
  //         <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  //       `,
  //     details: [
  //       {
  //         name: "Features",
  //         items: [
  //           "Multiple strap configurations",
  //           "Spacious interior with top zip",
  //           "Leather handle and tabs",
  //           "Interior dividers",
  //           "Stainless strap loops",
  //           "Double stitched construction",
  //           "Water-resistant",
  //         ],
  //       },
  //       // More sections...
  //     ],
  //   },
  // ]);

  const [displayProduct, setDisplayProduct] = useState(products[8]);
  const [cart, setCart] = useState([]);

  // for demo purposes
  // should have used vitest on react component instead
  // duplicate code > product.jsx
  const createCartItem = (product) => {
    return {
      name: product.name,
      id: product.id,
      qty: 1,
      price: product.price,
      imageSrc: product.imageSrc,
      imageAlt: product.imageAlt,
      description: product.description,
    };
  };

  const setInitialCartState = () => {
    // this way because i gave them dynamic ids
    const demoCart = [];
    for (let i = 0; i < 3; i++) {
      demoCart.push(createCartItem(products[i]));
    }
    setCart(demoCart);
  };
  useEffect(() => {
    setInitialCartState();
  }, []);

  return (
    <div className="grid w-full ">
      <Navbar cart={cart} />
      <Outlet
        context={[
          products,
          productSets,
          displayProduct,
          setDisplayProduct,
          cart,
          setCart,
        ]}
      />
      <Footer />
    </div>
  );
}

export default App;
