import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { useWallet } from '@web3-ui/core';
import LandingInformation from './LandingInformation'
import About from './About'

export default function Landing() {
  const {
    connection,
    connectWallet,
    connected
  } = useWallet();

  return (
    <Box>
      <Flex mb='5'>
        {connected
          ?
          <Heading p='2' border='1px solid #eee' borderRadius='3' size='sm'>Eth Address: {connection.ens || `${connection.userAddress!.slice(0, 4)}...${connection.userAddress!.slice(connection.userAddress!.length - 4)}`}</Heading>
          :
          <Button m='auto' colorScheme='dark' variant='outline' onClick={connectWallet}>Connect Wallet</Button>
        }
      </Flex>
      <About />
      <LandingInformation />
    </Box >
  );
}
