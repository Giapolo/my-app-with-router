import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";

// page components

import Home from "./Pages/Home";
import About from "./Pages/About";
import Article from "./Pages/components/Article"

// router creation
const getWeatherOfTheDay = () => {
  return "sunny";
};
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => {
          return getWeatherOfTheDay();
        },
        id: "app",
        children: [
          {
            path: "/",
            element: <Home />
          }
        ]
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/articles/:id",
        element: <Article />,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}