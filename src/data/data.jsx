import { v4 as uuidv4 } from "uuid";
import smallBowl from "../../public/assets/bowls/smallBowl.jpg";
// import largeBowl from "../../public/assets/Bowls/largeBowl.jpg";
import largeBowl from "../../public/assets/sets/bowl2.jpeg";
import porcelinMug from "../../public/assets/cups/porcelinMug.jpg";
import earthMug from "../../public/assets/cups/earth_mug.jpg";
import utensilsCup from "../../public/assets/cups/utensils_cup.jpg";
import spicePummel from "../../public/assets/misc/spice_pummel.webp";
import garlicScraper from "../../public/assets/misc/garlic_scraper.jpg";
import saltCellar from "../../public/assets/misc/salt_cellar.webp";
import saltAndPepperCellars from "../../public/assets/misc/salt_and_pepper_cellars.webp";
import angledSaltCellar from "../../public/assets/misc/angled_salt_cellar.webp";
import oilAndVinegarDispenser from "../../public/assets/oil_dispensers/oil_and_vinegar_dispenser.webp";
import oliveOilDispenser from "../../public/assets/oil_dispensers/olive_oil_dispenser.webp";

function getData(filter) {
  // Your dataSet array here
  console.log();
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
      description: `A small porcelain bowl that you probably don't need, but hey, it's cute.`,
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
      description:
        "A large porcelain bowl big enough to serve a feast for one... or a mouse.",

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
      description:
        "An elegant porcelain mug because plain mugs are just too boring for you.",

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
      description:
        "An earth-themed mug for when you want to feel closer to nature with your coffee.",

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
      description:
        "A stylish utensils cup because your kitchen desperately needed more sophistication.",

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
      description:
        "A handy garlic scraper for those moments when you forget that knives exist.",

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
      description:
        "A spice pummel because, clearly, your spices need a good pummeling.",

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
      description:
        "An earthy salt cellar because ordinary salt shakers just won't do.",

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
      description:
        "An angled salt cellar because why store salt in a straight container like a normal person?",

      altDescription: `
                Have you ever wondered: "boy my salt lives in a terrribly produced home. I don't think they like it there much, probably." Well... you're not going to believe this but... Do I Have News For You! we found it! the home of your salts dreams.
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
      description:
        "Salt and pepper cellars because shaking spices is so last century.",

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
      description:
        "Oil and vinegar dispensers because who pours oil and vinegar straight from the bottles anymore?",

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
      description:
        "An earthy olive oil dispenser because your olive oil deserves a special home.",

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

  return dataSet;
}

export default getData;
