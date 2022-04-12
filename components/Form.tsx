import React, { useState } from 'react'
import { ethers } from 'ethers'

import {
  FormControl,
  FormLabel,
  Flex,
  Spacer,
  Heading,
  Text,
  Spinner,
  Box,
  Select,
  Button,
  Textarea,
  Center,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  useToast,
} from "@chakra-ui/react"

import IconVector from '../components/IconVector'
import { walletConnect } from '../utils/index.js'

interface FormProps {
  onClose: () => void;
}

export default function Form(props: FormProps) {
  const [walletAddress, setWalletAddress] = useState('');

  const toast = useToast({
    containerStyle: {
      width: '20vw',
      maxWidth: '100%',
    },
  })

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await isLoading
    setIsLoading(true);
    const address = await walletConnect(toast);

    setWalletAddress(address);
    setIsLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex>
        <Box pt={2} pr={2}>
          <IconVector isNavBar={false} />
        </Box>
        <Heading size='lg'>Pitch Form</Heading>
      </Flex>
      <Text as='sup'>tell us more about the event and why you&apos;d like funding to attend</Text>
      <FormControl h='55vh'>
        {isLoading ?
          <Center pt='20vh'>
            <Spinner
              size='xl'
              color='#C76173'
            />
          </Center>
          :
          <>
            <FormLabel htmlFor='event' pt={2}>Event</FormLabel>
            <Select placeholder='Select Event' mb={2}>
              <option value='react-miami'>React Miami</option>
              <option value='dev-connect'>DevConnect</option>
            </Select>
            <FormLabel htmlFor='amount'>Funds Needed</FormLabel>
            <NumberInput step={0.01} min={0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel htmlFor='pitch' pt={2}>Pitch</FormLabel>
            <Textarea id='pitch' h={32} />
            <Flex mt={6}>
              <Button size='md' onClick={props.onClose}>Close</Button>
              <Spacer />
              <Button size='md' type='submit'>Pitch</Button>
            </Flex>
          </>
        }
      </FormControl>
    </form >
  )
}