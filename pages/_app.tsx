import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider, NETWORKS } from '@web3-ui/core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider network={NETWORKS.mainnet}>
        <Component {...pageProps} />
      </Provider>
    </ChakraProvider >
  )
}

export default MyApp
