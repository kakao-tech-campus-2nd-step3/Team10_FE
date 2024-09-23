import React from "react";
import { ChakraProvider, Box, Link, theme } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl" textAlign="center">
      <Link color="teal.500" fontSize="2xl" href="https://chakra-ui.com" rel="noopener noreferrer" target="_blank">
        Learn Chakra
      </Link>
    </Box>
  </ChakraProvider>
);

export default App;
