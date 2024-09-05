import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./css/style.css";
import "./css/color.css";
import "./css/responsive.css";
import "./css/custom.css";

// pages
import App from "./App";
import NotFoundPage from "./pages/NotFoundPage";
import UnderConstructionPage from "./pages/UnderConstructionPage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFoundPage />,
      children: [
        {
          path: "produk-layanan",
          element: <UnderConstructionPage />,
          children: [
            {
              path: "haji",
              element: <UnderConstructionPage />,
            },
            {
              path: "umroh",
              element: <UnderConstructionPage />,
            },
            {
              path: "wisata-halal",
              element: <UnderConstructionPage />,
            },
          ],
        },
        {
          path: "artikel",
          element: <UnderConstructionPage />,
        },
        {
          path: "galeri",
          element: <UnderConstructionPage />,
        },
        {
          path: "tentang-dallas",
          element: <UnderConstructionPage />,
        },
      ],
    },
  ],
  { basename: "/" }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
