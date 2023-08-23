export const login = async (email: string, password: string) => {
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
  const response = await fetch(path, options);
  return response.json() as Promise<LoginResponse>;
};

export type LoginResponse = {
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
