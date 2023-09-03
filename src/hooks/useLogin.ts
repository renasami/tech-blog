import { useMutation, useQueries, useQuery } from "react-query";
import { LoginResponse, login } from "../api/auth";

export const useLogin = () => {
  const mutateFn = async (args: Args) => await login(args.email, args.password);

  //   return { data, isLoading, isError };
};

type Args = {
  email: string;
  password: string;
};
