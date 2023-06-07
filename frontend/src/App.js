import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './pages/global/Login';
import Admin from './Admin';
import Student from './Student';
import Faculty from './Faculty';

function App() {

  const [isAuth, setIsAuth] = useState()

  useEffect(() => {
    const signin = async () => {
      const response = await fetch('http://localhost:8000/api/user', {
        headers: { 'Content-Type': 'application/json' },
        mode: "cors",
        credentials: 'include',
      });
      const res = await response.json();
      setIsAuth(res)
      console.log(res)
    }
    signin();
  }, [])

  if (isAuth) {
    if (isAuth.detail) {
      return (
        <ChakraProvider theme={theme}>
          <Login />
        </ChakraProvider>
      );
    }
  else if (isAuth.permission == 'admin') {
    return (
      <ChakraProvider theme={theme}>
          <Admin data={isAuth}/>
        </ChakraProvider>
    );
  } 
  else if (isAuth.permission == 'faculty') {
    return (
      <ChakraProvider theme={theme}>
          <Faculty data={isAuth}/>
        </ChakraProvider>
    )
  }
  else if (isAuth.permission == 'student') {
    return (
      <ChakraProvider theme={theme}>
          <Student data={isAuth}/>
        </ChakraProvider>
    )
  }
}
}

export default App;
