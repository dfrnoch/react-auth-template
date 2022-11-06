export interface User {
  name: string;
  surname: string;
  email: string;
}

export interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  Login(email: string, password: string): Promise<void>;
  Logout(): void;
}
