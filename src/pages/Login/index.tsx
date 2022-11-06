import { useAuth } from "../../contexts/auth";
import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { inputStyle } from "../Register";

export default function Login() {
  const { Login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email === "" || password === "") {
      return;
    }

    Login(email, password);
  }

  return (
    <div className="bg-black w-full h-[100vh] gradient">
      <span>&nbsp;</span>
      <form
        className="content w-[500px] h-fit mt-52 ml-auto mr-auto bg-black  p-5 rounded-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl text-white font-black">Login</h1>

        <div>
          <label className="block mb-2 text-sm mt-4 font-medium text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
            placeholder="example@gmail.com"
            required
          />
        </div>

        <div>
          <label className="block mb-2 mt-4 text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full mt-8 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
        >
          Login
        </button>

        <div className="w-fit ml-auto mr-auto mt-5">
          <div className="text-center">
            <Link to="/register" className="text-indigo-500 mt-2">
              Create Account.
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
