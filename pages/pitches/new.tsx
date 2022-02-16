import { useRouter } from 'next/router'
import { useWallet } from '@web3-ui/core';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Textarea
} from '@chakra-ui/react'
import { useEffect } from 'react';

export default function New() {
  const { connected } = useWallet();
  const router = useRouter();
  // useEffect(() => {
  //   if (connected) {
  //     router.push('/');
  //   }
  // })
  return (
    <Box w='20em' bg='white' m='0 auto'>
      <form>
        <FormControl>
          <FormLabel htmlFor='event'>Event Name</FormLabel>
          <Input id='text' type='event' />
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
        <Input id='submit' type='submit' />
      </form>
    </Box>
  )
}