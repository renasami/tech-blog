import { fetchJSON } from "../util/api";

export const useLogin = () => {
  const login = async ({ email, password }: LoginParams) => {
    const path = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_FIREBAE_KEY}`;
    const body = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(body),
    };
    return await fetch(path, options);
  };
  return { login };
};

type LoginResponse = {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
};

type LoginParams = {
  email: string;
  password: string;
};
