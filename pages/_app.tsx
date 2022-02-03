import { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Provider, NETWORKS } from '@web3-ui/core';
import NavBar from '../components/NavBar'
import { useWallet } from '@web3-ui/core';

const theme = extendTheme({
  fonts: {
    heading: 'IBM Plex Mono',
    body: 'Tillana'
  },
})
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Provider network={NETWORKS.mainnet}>
        <NavBar />
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider >
  )
}

export default MyApp
