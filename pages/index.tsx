import { NextPage } from 'next'
import Head from 'next/head'
import { Container } from '@chakra-ui/react';
import Landing from '../components/Landing'
import NavBar from '../components/NavBar'

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
      <Container maxW='container.lg' py={6} h='100%'>
        <NavBar />
        <Landing />
      </Container>
    </div>
  )
}

export default Home
