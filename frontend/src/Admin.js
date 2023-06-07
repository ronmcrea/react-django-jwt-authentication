import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react';
import Topbar from './pages/global/Topbar';

export default function Admin(props) {
  return (
    <ChakraProvider theme={theme}>
        <Topbar data={props.data}/>
          Admin
        </ChakraProvider>
  )
}
