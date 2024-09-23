import React from "react";
import { ChakraProvider, Box, Link, theme } from "@chakra-ui/react";

const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Link color="teal.500" href="https://chakra-ui.com" fontSize="2xl" target="_blank" rel="noopener noreferrer">
        Learn Chakra
      </Link>
    </Box>
  </ChakraProvider>
);

export default App;
