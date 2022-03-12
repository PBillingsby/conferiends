import { useWallet } from '@web3-ui/core';

import { Box, Heading, HStack, Stack, Button, Modal, useDisclosure } from '@chakra-ui/react';
import Underline from './Underline'
import BeginModal from './BeginModal'
export default function Landing() {
  const {
    disconnectWallet,
    connected,
    connection,
    connectWallet,
    switchToCorrectNetwork
  } = useWallet();

  const handleClick = async (e: React.MouseEvent) => {
    await connection
    if (!connection.userAddress) {
      connectWallet()
      onOpen()
    }
  }
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box pt={64}>
      <Heading size='2xl'>Making conferences</Heading>
      <HStack pb={6}>
        <Heading size='2xl'>more</Heading>
        <Stack pt={6}>
          <Heading size='2xl' bgGradient='linear(to-r, #E49882, #C76173 70%, #9A7BC3 100%)' bgClip='text'>accessible</Heading>
          <Underline />
        </Stack>
      </HStack>
      <Heading size='md' w='40%' py={2} fontWeight='light' color='gray.400' mb={6}>We match talented individuals with generous benefactors to help fund trips to life changing conferences</Heading>
      <Button size='lg' bg='none' border='1.5px solid black' fontSize='xl' boxShadow='0px 0px 15px #a5a5a5' _hover={{ boxShadow: '0px 0px 35px #a5a5a5', bg: '#eee', color: 'black' }} color='#fff' onClick={(e) => handleClick(e)}>
        Get Started
      </Button>
      {!!connection.userAddress &&
        <Modal isOpen={isOpen} onClose={onClose}>
          <BeginModal />
        </Modal>
      }
    </Box >
  );
}
