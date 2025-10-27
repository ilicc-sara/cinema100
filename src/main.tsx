import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import Auth from "./pages/authPage/Index.tsx";
import Home from "./pages/homePage/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout.tsx";
import SingleMovie from "./pages/singleMovie.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },

  {
    path: "/home",
    element: <SharedLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/:movieId",
        element: <SingleMovie />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
