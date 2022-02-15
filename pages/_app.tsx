import { AppProps } from 'next/app'
import { ChakraProvider, Box, Container } from '@chakra-ui/react'
import { Provider, NETWORKS } from '@web3-ui/core';
import Navbar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider network={NETWORKS.mainnet}>
        <Box pt='4' h='100vh'
          backgroundRepeat='no-repeat'
          background='linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)'
          backgroundImage="url('https://s3-alpha-sig.figma.com/img/da1d/2dff/8650f083eb9962df18f8ff06fdcc588d?Expires=1645401600&Signature=KOPx4yYN30KjAyL5P1U4yrCTfK6Nk2Gypa0orFzzcjz20LIAERIOl9DXkIHdKP7rXxAXNq~szF-iepOhkkkLgMork-C-4mdgqUWQlRX8kHnu21yWa5qj9GnY36BbXLJ~CSYrqCq6Se3Pa3~1tG1xMhceXAUqIQtkhL2ccCnMXsOmIw8CbEyXf~fMd80X65vUg~jlRBh~qcM8ZTDgnH4Avh-Y7Siq1eqxS2p0VHDTywtU1bTYxykz93RRoUkW4qloSCnorgi7hDo3Ovql1kgLmcozQWIIbYX38jYGxaQ-cZB-erF~lRu9pmdOtfxIikjkEKXBk~I-cLbJRi9KDiNS6A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')"
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
