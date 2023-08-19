import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  useColorMode,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box px={4}>
      <Container maxW="container.lg">
        <Flex
          as="header"
          justifyContent="space-between"
          alignItems="space-evenly"
        >
          <Link href="/">
            <Heading as="h1" fontSize="2xl" cursor="pointer">
              Kanpai Code
            </Heading>
          </Link>
          <IconButton
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            aria-label={""}
          />
        </Flex>
      </Container>
    </Box>
  );
};
