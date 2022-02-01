import type { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/Landing'
import { Center } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Conferiends</title>
        <meta
          name="Conferiends"
          content="Connecting talent"
        />
      </Head>
      <Center>
        <Landing />
      </Center>
    </div>
  )
}

export default Home
