import { AppProps } from 'next/app'
import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import Navbar from '../components/NavBar'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  components: {
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
        },
      },
    },
  },
})



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
