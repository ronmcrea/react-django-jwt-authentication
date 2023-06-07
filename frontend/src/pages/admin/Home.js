import React, { useEffect, useState } from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';

function Home() {

  return (
    <ChakraProvider theme={theme}>
      Hi
    </ChakraProvider>
  );
}

export default Home;
