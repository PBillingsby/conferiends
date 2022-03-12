import { AppProps } from 'next/app'
import { ChakraProvider, Box, Container, extendTheme } from '@chakra-ui/react'
import { Provider, NETWORKS } from '@web3-ui/core';
import Navbar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider network={NETWORKS.mainnet}>
        <Box pt='4' h='100vh'
          bg='none'
          backgroundRepeat='no-repeat'
          backgroundSize='fit-content'
          backgroundImage="url('../public/bg.png')"
        >
          <Navbar />
          <Container maxW='container.lg'>
            <Component {...pageProps} />
          </Container>
        </Box>
      </Provider>
    </ChakraProvider >
  )
}

export default MyApp
