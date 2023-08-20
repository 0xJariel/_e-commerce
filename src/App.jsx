import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { v4 as uuidv4 } from "uuid";
import largeBowl from "./assets/Bowls/large_bowl.jpg";
import smallBowl from "./assets/Bowls/small_bowl.jpg";
import porcelinMug from "./assets/cups/porcelin_mug.jpg";
import earthMug from "./assets/cups/earth_mug.jpg";
import utensilsCup from "./assets/cups/utensils_cup.jpg";
import spicePummel from "./assets/misc/spice_pummel.webp";
import garlicScraper from "./assets/misc/garlic_scraper.jpg";
import saltCellar from "./assets/misc/salt_cellar.webp";
import saltAndPepperCellars from "./assets/misc/salt_and_pepper_cellars.webp";
import angledSaltCellar from "./assets/misc/angled_salt_cellar.webp";
import oilAndVinegarDispenser from "./assets/oil_dispensers/oil_and_vinegar_dispenser.webp";
import oliveOilDispenser from "./assets/oil_dispensers/olive_oil_dispenser.webp";
import soapDispenser from "./assets/Bowls/bowl_set.jpg";
import plate from "./assets/Bowls/bowl_set.jpg";
import plate2 from "./assets/Bowls/bowl_set.jpg";
import plateSet from "./assets/sets/plate_set.jpeg";
import bowlSet from "./assets/sets/bowl_set.jpeg";

function App() {
  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      name: "Small Bowl",
      price: 12,
      imageSrc: smallBowl,
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: smallBowl,
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Large Bowl",
      href: "#",
      price: 22,
      imageSrc: largeBowl,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: largeBowl,
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Porcelin Mug",
      href: "#",
      price: 89,
      imageSrc: porcelinMug,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: porcelinMug,
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Earth Mug",
      href: "#",
      price: 35,
      imageSrc: earthMug,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: earthMug,
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Utensils Cup",
      href: "#",
      price: 48,
      imageSrc: utensilsCup,
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Garlic Scraper",
      href: "#",
      price: 35,
      imageSrc: garlicScraper,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Spice Pummel",
      href: "#",
      price: 89,
      imageSrc: spicePummel,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Earthy Salt Cellar",
      href: "#",
      price: 35,
      imageSrc: saltCellar,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Angled Salt Cellar",
      href: "#",
      price: 35,
      imageSrc: angledSaltCellar,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Salt and Pepper Cellars",
      href: "#",
      price: 89,
      imageSrc: saltAndPepperCellars,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Stacked Oil and Vinegar Dispensars",
      href: "#",
      price: 35,
      imageSrc: oilAndVinegarDispenser,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Earthy Olive Oil Dispenser",
      href: "#",
      price: 35,
      imageSrc: oliveOilDispenser,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
  ]);

  const [productSets, setProductSets] = useState([
    {
      id: uuidv4(),
      name: "Bowl Set",
      href: "#",
      price: 12,
      imageSrc: bowlSet,
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
    {
      id: uuidv4(),
      name: "Plate Set",
      href: "#",
      price: 22,
      imageSrc: plateSet,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
      rating: 4,
      images: [
        {
          id: 1,
          name: "Angled view",
          src: "https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg",
          alt: "Angled front view with bag zipped and handles upright.",
        },
        // More images...
      ],
      colors: [
        {
          name: "Washed Black",
          bgColor: "bg-gray-700",
          selectedColor: "ring-gray-700",
        },
        { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
        {
          name: "Washed Gray",
          bgColor: "bg-gray-500",
          selectedColor: "ring-gray-500",
        },
      ],
      description: `
          <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
        `,
      details: [
        {
          name: "Features",
          items: [
            "Multiple strap configurations",
            "Spacious interior with top zip",
            "Leather handle and tabs",
            "Interior dividers",
            "Stainless strap loops",
            "Double stitched construction",
            "Water-resistant",
          ],
        },
        // More sections...
      ],
    },
  ]);

  const [displayProduct, setDisplayProduct] = useState(products[11]);
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
      <Navbar />
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
