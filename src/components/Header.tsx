import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Box px={4} bgColor="ActiveBorder">
      <Container maxW="container.lg">
        <Flex
          as="header"
          py="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/">
            <Heading as="h1" fontSize="2xl" cursor="pointer">
              Kanpai Code
            </Heading>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
