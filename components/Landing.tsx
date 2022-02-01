import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import { useWallet } from '@web3-ui/core';
import LandingInformation from './LandingInformation'
export default function Landing() {
  const {
    connection,
    connectWallet,
    connected
  } = useWallet();

  return (
    <VStack w="100">
      <Flex>
        {connected
          ?
          <Box>{connection.ens || connection.userAddress}</Box>
          :
          <Button m="auto" colorScheme="dark" variant='outline' onClick={connectWallet}>Connect Wallet</Button>
        }
      </Flex>
      <LandingInformation />
    </VStack >
  );
}
