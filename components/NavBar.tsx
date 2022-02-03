import NextLink from 'next/link';
import { Heading, Box, Flex, Button, Spacer, Image, HStack } from '@chakra-ui/react';
import { useWallet } from '@web3-ui/core';

export default function NavBar() {
  const { disconnectWallet,
    connected,
    correctNetwork,
    switchToCorrectNetwork
  } = useWallet();

  return (
    <Box w='100' p='2' mb='5' background='#eee'>
      <Flex>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Heart-hand-shake.svg/120px-Heart-hand-shake.svg.png' boxSize='40px' />
        <Heading size='lg' color='teal.400' pt='1'>
          Conferiends
        </Heading>
        <Spacer />
        {connected &&
          <HStack color='teal.400' spacing='5'>
            <NextLink href='/'>Home</NextLink>
            <NextLink href='/pitches/new'>Pitch</NextLink>
            <NextLink href='/pitches'>Fund</NextLink>
            <Button colorScheme='teal.400' variant='outline' onClick={disconnectWallet}>Disconnect</Button>
          </HStack>
        }
      </Flex>
    </Box>
  )
}