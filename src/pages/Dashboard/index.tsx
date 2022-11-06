import { useAuth } from "../../contexts/auth";
import Button from "./components/Button";

export default function Dashboard() {
  const { user, Logout } = useAuth();

  function handleLogout() {
    console.log("Logout");
    Logout();
  }

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <p>{user?.email}</p>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  );
}
