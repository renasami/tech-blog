"use client";
import { Button, ChakraProvider, extendBaseTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

import { ReactNode } from "react";

const theme = extendBaseTheme({
  components: {
    Button,
  },
});

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
};

export default Providers;
