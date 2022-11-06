import { useRoutes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

// There's every route for authenticated users
export default function AppRoutes() {
  const routes = [
    {
      path: "/",
      element: <Dashboard />,
    },
  ];
  return useRoutes(routes);
}
