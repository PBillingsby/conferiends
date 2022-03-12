import NextLink from "next/link"
import { useWallet } from '@web3-ui/core';

import { Button, Spacer, Icon, HStack, Heading, Link } from '@chakra-ui/react';
import { Ticket } from 'tabler-icons-react';

export default function NavBar() {
  const {
    disconnectWallet,
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
    <HStack px={8} pb={8} w='100vw' position='fixed'>
      <Icon as={Ticket} w={8} h={8} />
      <Heading size='lg' color='white'>
        Conferiends
      </Heading>
      <Spacer />
      <HStack color='white' spacing={8} fontSize='xl'>
        <NextLink href={'/'} passHref>
          <Link>Home</Link>
        </NextLink>
        <NextLink href={'/pitches'} passHref>
          <Link>Fund Others</Link>
        </NextLink>
      </HStack>
    </HStack>
  )
}