import { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/Landing'
import { Container } from '@chakra-ui/react';

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
      <Container maxW='container.xl' h='100%'>
        <Landing />
      </Container>
    </div>
  )
}

export default Home
