import React, { useState } from 'react';
import {
  ChakraProvider,
  Input,
  Flex,
  Card,
  CardBody,
  Image,
  Button,
} from '@chakra-ui/react';
import LOGO from "../../assets/Emblem.png";
import { useNavigate } from 'react-router'

function Login() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                credentials: 'include',
                body: JSON.stringify({
                  name: name,
                  password: password,
                })
            });
            console.log(response)
            navigate(0)
      };

  return (
    <ChakraProvider>
          <Flex h="100vh" bgGradient='linear(to-b, teal, #252525)' align="center">
          <Card maxW='md' mx="auto" p={2}  align='center' >
            <CardBody align='center'>
                <Image src={LOGO} alt='logo'/>
                <Input type='text' placeholder='Username' my={2} onChange={(e)=>{setName(e.target.value)}}/>
                <Input type='password' placeholder='Password' my={2} onChange={(e)=>{setPassword(e.target.value)}}/>
                <Button colorScheme='teal' size='md' my={2} onClick={handleSubmit}>Login</Button>
            </CardBody>
          </Card>
          </Flex>
        </ChakraProvider>
  );
}

export default Login;
