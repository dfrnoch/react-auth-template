import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function AuthRoutes() {
  const routes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];

  return useRoutes(routes);
}
