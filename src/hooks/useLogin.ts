import { useMutation, useQuery } from "react-query";
import { LoginResponse, login } from "../api/auth";

export const useLogin = (email: string, password: string) => {
  const mutateFn = async (args: Args) => await login(args.email, args.password);
  const { data, isLoading, isError, mutateAsync } = useMutation<
    LoginResponse,
    Error,
    Args
  >(mutateFn);
  return { data, isLoading, isError, mutateAsync };
};

type Args = {
  email: string;
  password: string;
};
