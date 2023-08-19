import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

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

function Products() {
  const [products, setProducts] = useState([
    {
      id: uuidv4(),
      name: "Small Bowl",
      href: "#",
      price: "$12",
      imageSrc: smallBowl,
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: uuidv4(),
      name: "Large Bowl",
      href: "#",
      price: "$22",
      imageSrc: largeBowl,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: uuidv4(),
      name: "Porcelin Mug",
      href: "#",
      price: "$89",
      imageSrc: porcelinMug,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: uuidv4(),
      name: "Earth Mug",
      href: "#",
      price: "$35",
      imageSrc: earthMug,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: uuidv4(),
      name: "Utensils Cup",
      href: "#",
      price: "$48",
      imageSrc: utensilsCup,
      imageAlt:
        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
    {
      id: uuidv4(),
      name: "Garlic Scraper",
      href: "#",
      price: "$35",
      imageSrc: garlicScraper,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: uuidv4(),
      name: "Spice Pummel",
      href: "#",
      price: "$89",
      imageSrc: spicePummel,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: uuidv4(),
      name: "Earthy Salt Cellar",
      href: "#",
      price: "$35",
      imageSrc: saltCellar,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: uuidv4(),
      name: "Angled Salt Cellar",
      href: "#",
      price: "$35",
      imageSrc: angledSaltCellar,
      imageAlt:
        "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
    {
      id: uuidv4(),
      name: "Salt and Pepper Cellars",
      href: "#",
      price: "$89",
      imageSrc: saltAndPepperCellars,
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
    },
    {
      id: uuidv4(),
      name: "Stacked Oil and Vinegar Dispensars",
      href: "#",
      price: "$35",
      imageSrc: oilAndVinegarDispenser,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
    {
      id: uuidv4(),
      name: "Earthy Olive Oil Dispenser",
      href: "#",
      price: "$35",
      imageSrc: oliveOilDispenser,
      imageAlt:
        "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
  ]);

  return <div></div>;
}

export default Products;
