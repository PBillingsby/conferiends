import { Heading, Box, Flex, Button, Spacer, Image, Link, HStack } from '@chakra-ui/react';
import { useWallet } from '@web3-ui/core';
import { useRouter } from 'next/router'

export default function NavBar() {
  const { disconnectWallet,
    connected,
    correctNetwork,
    switchToCorrectNetwork
  } = useWallet();
  const router = useRouter();
  if (!connected) {
    router.push('/')
  }
  return (
    <Box w='100' p='2' mb='5' background='#eee'>
      <Flex>
        <Image src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Heart-hand-shake.svg/120px-Heart-hand-shake.svg.png' boxSize='40px' />
        <Heading size='lg' color='teal.400' pt='1'>
          Conferiends
        </Heading>
        <Spacer />
        {connected &&
          <HStack spacing='4'>
            <Link px='4' color='teal.400' href='/'>Home</Link>
            <Link px='4' color='teal.400' href='/pitches/new'>Pitch</Link>
            <Link px='4' color='teal.400' href='/pitches'>Fund</Link>
            <Button color='#eee' onClick={disconnectWallet}>disconnect</Button>
          </HStack>
        }
      </Flex>
    </Box>
  )
}