import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react';
import Topbar from './pages/global/Topbar';

export default function Student(props) {
  return (
    <ChakraProvider theme={theme}>
        <Topbar data={props.data}/>
          Student
        </ChakraProvider>
  )
}
