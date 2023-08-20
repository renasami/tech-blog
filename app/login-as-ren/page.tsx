"use client";
import { useLogin } from "@/src/hooks/useLogin";
import {
  Text,
  Container,
  Stack,
  Heading,
  Flex,
  Button,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

type FormValues = { email: string; password: string };

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const { login } = useLogin();
  if (isSubmitting) return <Text>Submitting...</Text>;
  return (
    <form onSubmit={handleSubmit(login)}>
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" padding={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input
            placeholder="sample@sample.com"
            mb={3}
            type="email"
            required
            {...register("email")}
          />
          <Input
            placeholder="********"
            variant="filled"
            mb={6}
            type="password"
            required
            {...register("password")}
          />
          <Button mb={6} border={"bold"} colorScheme="teal" type="submit">
            Log in
          </Button>
          <Button>Toggle Color Mode</Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default Login;
