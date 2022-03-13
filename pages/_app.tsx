import { AppProps } from 'next/app'
import { ChakraProvider, Box, Container, DarkMode } from '@chakra-ui/react'
import { Provider, NETWORKS } from '@web3-ui/core';
import Navbar from '../components/NavBar'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider network={NETWORKS.mainnet}>
        <DarkMode>
          <Box pt='4' h='100vh'>
            <Navbar />
            <Container maxW='container.lg' pt={12}>
              <Component {...pageProps} />
            </Container>
          </Box>
        </DarkMode>
      </Provider>
    </ChakraProvider >
  )
}

export default MyApp
