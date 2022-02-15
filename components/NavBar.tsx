import Link from 'next/link';
import { useWallet } from '@web3-ui/core';

import { Box, Flex, Button, Spacer, Icon, HStack, Text, Select } from '@chakra-ui/react';
import { Ticket } from 'tabler-icons-react';

export default function NavBar() {
  const { disconnectWallet,
    connected,
    connection,
    connectWallet,
    switchToCorrectNetwork
  } = useWallet();

  const ethAddress = () => {
    return `${connection.userAddress!.slice(0, 4)
      }...${connection.userAddress!.slice(connection.userAddress!.length - 4)
      } `
  }

  return (
    <Box px={8} pb={8}>
      <Flex pb={8}>
        <Icon as={Ticket} w={8} h={8} />
        <Text color='blue.800' pt={1}>
          Conferiends
          </Text>
        <Spacer />
        <HStack color='blue.800' spacing={8}>
          <Link href={'/'}>Home</Link>
          <Link href={'/pitches/new'}>Get Funded</Link>
          <Link href={'/pitches'}>Fund Others</Link>
        </HStack>
        <Spacer />
        {connected ?
          <Select w='20%'>
            <option disabled selected>{ethAddress()}</option>
            <option onSelect={() => disconnectWallet()}>Disconnect</option>
          </Select> :
          <Button m='auto' colorScheme='dark' variant='outline' onClick={connectWallet}>Connect Wallet</Button>
        }
      </Flex>
    </Box >
  )
}