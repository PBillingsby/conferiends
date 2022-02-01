import type { AppProps } from 'next/app'
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react'
import { Provider, NETWORKS } from '@web3-ui/core';
import NavBar from '../components/NavBar'
import { useWallet } from '@web3-ui/core';

const theme = extendTheme({
  fonts: {
    heading: 'Monospace',
    body: 'Monospace',
  },
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider network={NETWORKS.mainnet}>
        <NavBar />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Provider>

    </ChakraProvider >
  )
}

export default MyApp
