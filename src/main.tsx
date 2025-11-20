import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import AuthLogIn from "./pages/authPage/IndexLogIn.tsx";
import AuthSignUp from "./pages/authPage/IndexSignUp.tsx";
import Home from "./pages/homePage/Index.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout.tsx";
import SingleMovie from "./pages/singleMovie/Index.tsx";

const router = createBrowserRouter([
  {
    path: "/login",
    // /login
    element: <AuthLogIn />,
  },
  {
    path: "/signup",
    element: <AuthSignUp />,
  },

  {
    // path: "/home",
    //  "/"
    element: <SharedLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:movieId",
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
