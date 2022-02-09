import NextLink from 'next/link';
import { Heading, Box, Flex, Button, Spacer, Image, HStack, Text } from '@chakra-ui/react';
import { useWallet } from '@web3-ui/core';

export default function NavBar() {
  const { disconnectWallet,
    connected,
    correctNetwork,
    connectWallet,
    switchToCorrectNetwork
  } = useWallet();

  return (
    <Box w='100' p='2' mb='5' background='#eee'>
      <Flex>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Heart-hand-shake.svg/120px-Heart-hand-shake.svg.png' boxSize='40px' />
        <Heading size='lg' color='blue.800' pt='1'>
          <Text bgGradient='linear(to-r, blue.200, blue.400)' bgClip='text'>
            Conferiends
          </Text>
        </Heading>
        <Spacer />
        {connected ?
          <HStack color='blue.800' spacing='5'>
            <NextLink href='/'>Home</NextLink>
            <NextLink href='/pitches/new'>Pitch</NextLink>
            <NextLink href='/pitches'>Fund</NextLink>
            <Button colorScheme='#eee' variant='outline' onClick={disconnectWallet}>Disconnect</Button>
          </HStack>
          :
          <Button m='auto' colorScheme='dark' variant='outline' onClick={connectWallet}>Connect Wallet</Button>
        }
      </Flex>
    </Box>
  )
}