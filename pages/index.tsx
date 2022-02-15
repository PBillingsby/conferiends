import { NextPage } from 'next'
import Head from 'next/head'
import Landing from '../components/Landing'

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
      <Landing />
    </div>
  )
}

export default Home
