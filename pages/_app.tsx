import { AppProps } from 'next/app'
import { ChakraProvider, Box, Container, DarkMode } from '@chakra-ui/react'
import Navbar from '../components/NavBar'
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
  styles: {
    global: {
      body: {
      },
      a: {
        _hover: {
          textDecoration: 'none',
        },
      }
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
