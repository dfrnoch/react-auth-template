import { useAuth } from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes() {
  const { signed, loading } = useAuth();

  return loading ? <div /> : signed ? <AppRoutes /> : <AuthRoutes />;
}
