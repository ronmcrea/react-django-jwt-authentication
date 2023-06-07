import React from 'react'
import { ChakraProvider, theme, TableContainer, Table, Thead, Tbody, Th, Tr, Td, Tfoot, Heading, VStack, Container } from '@chakra-ui/react';
import Topbar from './pages/global/Topbar';

export default function Faculty(props) {
    console.log(props.data)
  return (
    <ChakraProvider theme={theme}>
        <Topbar data={props.data}/>
        Faculty
        </ChakraProvider>
  )
}
