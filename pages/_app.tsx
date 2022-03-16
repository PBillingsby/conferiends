import { AppProps } from 'next/app'
import { ChakraProvider, Box, Container, DarkMode } from '@chakra-ui/react'
import Navbar from '../components/NavBar'
import { extendTheme } from '@chakra-ui/react';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        // backgroundImage: 'url("../public/bg.jpg")',
        // backgroundSize: 'fit-content',
        // bg: 'none'
      },
    },
  }
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box pt='4' h='100vh'>
        <Navbar />
        <Container maxW='container.lg' pt={12}>
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider >
  )
}

export default MyApp
