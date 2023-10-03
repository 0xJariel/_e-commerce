import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./page/Home.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./page/Shop.jsx";
import Cart from "./page/Cart.jsx";
import ErrorPage from "./page/ErrorPage.jsx";
import Product from "./page/Product.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      {
        path: "product/:name",
        element: <Product />,
      },
      // { path: "cart", element: <Cart /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
