import { useRouter } from 'next/router'
import { useWallet } from '@web3-ui/core';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Textarea,
  Select,
  Heading,
  Flex,
  Spacer
} from '@chakra-ui/react'
import { useEffect } from 'react';

interface FormData {
  funds: number;
  event: string;
  pitch: string;
}

export default function New() {
  // const { connected } = useWallet();
  // const router = useRouter();
  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log(formData)
  }
  return (
    <Flex>
      <Box>
        <Heading size='lg'>How it works</Heading>
        <Box>placeholder</Box>
      </Box>
      <Spacer />
      <Box w='40em' bg='white' m='0 auto' p={6} borderRadius={3}>
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel htmlFor='event'>Event Name</FormLabel>
            <Select>
              <option disabled selected>select event</option>
              <option value='react_miami'>React Miami</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='funds'>Funds Needed</FormLabel>
            <Input id='funds' type='number' />
            <FormHelperText>in $ETH</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor='pitch'>Pitch</FormLabel>
            <Textarea />
          </FormControl>
          <Input w='50%' m='auto' id='submit' type='submit' />
        </form>
      </Box>
    </Flex>
  )
}