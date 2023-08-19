"use client";
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

const Login = () => {
  const bgColor = useColorModeValue("gray.100", "100");
  const textColor = useColorModeValue("white", "black");

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      background={bgColor}
      textColor={textColor}
    >
      <Flex direction="column" background="gray.100" padding={12} rounded={6}>
        <Heading mb={6}>Log in</Heading>
        <Input placeholder="sample@sample.com" mb={3} type="email" />
        <Input placeholder="********" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">
          Log in
        </Button>
        <Button>Toggle Color Mode</Button>
      </Flex>
    </Flex>
  );
};

export default Login;
