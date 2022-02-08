import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  )
}