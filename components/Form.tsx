import { ethers } from 'ethers'
import {
  FormControl,
  FormLabel,
  Flex,
  Spacer,
  Heading,
  Text,
  Input,
  Box,
  Select,
  Button,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react"

import IconVector from '../components/IconVector'
import addressFormatter from '../utils/index.ts'

interface WalletAddressProps {
  walletAddress: string;
  onClose: () => void;
}

export default function Form(props: WalletAddressProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event)
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
      <FormControl>
        <FormLabel htmlFor='address'>Address</FormLabel>
        <Input id='address' textAlign='center' type='text' value={addressFormatter(props.walletAddress)} isReadOnly />
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
        <Textarea id='pitch' />
        <Flex mt={6}>
          <Button size='md' onClick={props.onClose}>Close</Button>
          <Spacer />
          <Button size='md' type='submit'>Pitch</Button>
        </Flex>
      </FormControl>
    </form>
  )
}