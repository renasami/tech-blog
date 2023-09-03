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
    <Box px={16} padding={0}>
      <Container
        maxW="container.lg"
        margin={0}
        background={"blue"}
        maxWidth={"100%"}
        width={"100%"}
      >
        <Flex
          as="header"
          justifyContent="space-evenly"
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
