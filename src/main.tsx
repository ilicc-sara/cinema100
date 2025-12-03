import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import AuthLogIn from "./pages/authPage/IndexLogIn.tsx";
import AuthSignUp from "./pages/authPage/IndexSignUp.tsx";
import Home from "./pages/homePage/Index.tsx";
import PrivateRoute from "./pages/PrivateRoute.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout.tsx";
import SingleMovie from "./pages/singleMovie/Index.tsx";
import { AuthContextProvider } from "./context/AuthContext.tsx";
import { Navigate } from "react-router-dom";
// u "/" rutu proveriti postoji li access_token u local storage
// ako ne postoji redirect na login
// ako postoji ,

// 1. pogledati postoji li user u stejtu
// 2. ako postoji redirect na homepage
// 3. ako ne postoji, dohvatiti ga na osnovu tokena
// 4. staviti ga u stejt i mogu koristiti kontext
// 5. redirect na homepage
// ako sam dosla na homepage znaci da sam ulogovana
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: <AuthLogIn />,
  },
  {
    path: "/signup",
    element: <AuthSignUp />,
  },

  {
    element: (
      <PrivateRoute>
        <SharedLayout />
      </PrivateRoute>
    ),
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
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </StrictMode>
);
