import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../pages/App";
import { Page404 } from "../pages/Page404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [{ path: "/register", element: <h1>Register</h1> }],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
