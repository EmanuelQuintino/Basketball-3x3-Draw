import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Page404 } from "../pages/Page404";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/register", element: <Register /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
