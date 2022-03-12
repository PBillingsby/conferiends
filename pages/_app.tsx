import { AppProps } from 'next/app'
import { ChakraProvider, Box, Container, extendTheme } from '@chakra-ui/react'
import { Provider, NETWORKS } from '@web3-ui/core';
import Navbar from '../components/NavBar'
import bg from '../public/bg.png'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider network={NETWORKS.mainnet}>
        <Box pt='4' h='100vh'
          backgroundRepeat='no-repeat'
          backgroundSize='fit-content'
          backgroundImage={bg}
        >
          <Navbar />
          <Container pt={30} maxW='container.lg'>
            <Component {...pageProps} />
          </Container>
        </Box>
      </Provider>
    </ChakraProvider >
  )
}

export default MyApp
