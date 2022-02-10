import NextLink from 'next/link';
import { useWallet } from '@web3-ui/core';

import { Heading, Box, Flex, Button, Spacer, Icon, HStack, Text, Select } from '@chakra-ui/react';
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
    <Box>
      <Flex>
        <Icon as={Ticket} w={7} h={7} />
        <Text color='blue.800' pt={1}>
          Conferiends
          </Text>
        <Spacer />
        <HStack color='blue.800' spacing={5}>
          <NextLink href='/pitches/new'>Get Funded</NextLink>
          <NextLink href='/pitches'>Fund Others</NextLink>
        </HStack>
        <Spacer />
        {connected ?
          <Select>
            <option disabled selected>{ethAddress()}</option>
            <option onSelect={disconnectWallet}>Disconnect</option>
          </Select> :
          <Button m='auto' colorScheme='dark' variant='outline' onClick={connectWallet}>Connect Wallet</Button>
        }
      </Flex>
    </Box >
  )
}