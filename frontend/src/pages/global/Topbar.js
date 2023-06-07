import React from 'react';
import {
  ChakraProvider,
  Text,
  theme,
  Flex,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router'

function Topbar(props) {

  const navigate = useNavigate()

  const handleClick = async() => {
    
    const response = await fetch('http://localhost:8000/api/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    console.log(response)
    navigate(0)
  };

  return (
    <ChakraProvider theme={theme}>
    <Flex padding={4} backgroundColor={'teal'} justifyContent="space-between">
      <Text fontWeight='500' fontSize="2xl" color='white'>Welcome, {props.data.name}</Text>
      
      <Button colorScheme='black' size='md' onClick={handleClick}><Text>LogOut</Text></Button>
    </Flex>
    </ChakraProvider>
  );
}

export default Topbar;
