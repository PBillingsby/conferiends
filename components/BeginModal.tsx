import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Form from './Form';

import { CurrencyEthereum } from 'tabler-icons-react';
import { useState } from 'react'
import { ethers } from 'ethers'
declare const window: any

export default function BeginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [walletAddress, setWalletAddress] = useState('');
  const handleClick = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

      await provider.send("eth_requestAccounts", []);

      const signer = provider.getSigner();
      const address = await signer.getAddress();

      setWalletAddress(address);
      onOpen();
    }
    else {
      debugger
    }
  }

  return (
    <Box mb={2}>
      <Button size='lg' minW='15vw' bg='none' border='1.5px solid black'
        fontSize='xl' boxShadow='0px 0px 15px #a5a5a5' _hover={{
          boxShadow: '0px 0px 35px #a5a5a5',
          bg: '#eee', color: 'black'
        }} color='#fff' onClick={handleClick}>
        Get Started
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='none'
          backdropFilter='auto'
          backdropInvert='10%'
          backdropBlur='3px'
        />
        <ModalContent>
          <ModalBody p={6}>
            <Form walletAddress={walletAddress} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box >
  )
}