import React from "react";
import { v4 as uuidv4 } from "uuid";
import smallBowl from "../assets/Bowls/small_bowl.jpg";
import porcelinMug from "../assets/cups/porcelin_mug.jpg";
import earthMug from "../assets/cups/earth_mug.jpg";
import utensilsCup from "../assets/cups/utensils_cup.jpg";
import spicePummel from "../assets/misc/spice_pummel.webp";
import garlicScraper from "../assets/misc/garlic_scraper.jpg";
import saltCellar from "../assets/misc/salt_cellar.webp";
import saltAndPepperCellars from "../assets/misc/salt_and_pepper_cellars.webp";
import angledSaltCellar from "../assets/misc/angled_salt_cellar.webp";
import oilAndVinegarDispenser from "../assets/oil_dispensers/oil_and_vinegar_dispenser.webp";
import oliveOilDispenser from "../assets/oil_dispensers/olive_oil_dispenser.webp";
import largeBowl from "../assets/Bowls/large_bowl.jpg";

function getData(filter) {
  // Your dataSet array here
  const dataSet = [
    {
      id: uuidv4(),
      type: "bowl",
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
          The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "bowl",
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
          The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "mug",
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "mug",
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "misc",
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
          src: utensilsCup,
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "misc",
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
          src: garlicScraper,
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "misc",
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
          src: spicePummel,
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "misc",
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
          src: saltCellar,
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "misc",

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
          src: angledSaltCellar,
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "misc",

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
          src: saltAndPepperCellars,
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "misc",

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
          src: oilAndVinegarDispenser,
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
      type: "misc",

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
          src: oliveOilDispenser,
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
                The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.
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
  ];
  // Check if the filter is not provided or empty
  if (!filter) {
    return dataSet;
  }

  // Filter the dataSet based on the filter value
  const filteredData = dataSet.filter((item) => {
    if (filter === "misc") {
      return item.type === "misc";
    } else if (filter === "bowl") {
      return item.type === "bowl";
    } else if (filter === "cup") {
      return item.type === "cup";
    }
    // You can add more conditions if needed
  });

  return filteredData;
}

export default getData;
