import React, { useState, useEffect, createContext, useContext } from "react";
import { api } from "../services/api";
import { User, AuthContextData } from "../interfaces/user.interface";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = localStorage.getItem("user");
      const storageToken = localStorage.getItem("token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        api.defaults.headers["Authorization"] = `${storageToken}`;
      }
    }

    loadStorageData();
    setLoading(false);
  }, []);

  async function Login(email: string, password: string) {
    const response = await api.post("/api/login", { email, password });
    const data = response.data;

    setUser(data.user);

    api.defaults.headers["Authorization"] = `${data.token}`;

    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  }

  function Logout() {
    localStorage.clear();
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
