import { FormControl, FormLabel, Input, Select, Button, Textarea, NumberInput, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, NumberInputStepper } from '@chakra-ui/react';
import { useWallet } from '@web3-ui/core';

export default function ModalForm() {
  const { connection } = useWallet();

  const handleSubmit = (e) => {

  }

  return (
    <FormControl p={4}>
      <FormLabel htmlFor='address'>Address</FormLabel>
      <Input id='address' textAlign='center' type='text' value={connection.userAddress} isReadOnly />
      <FormLabel htmlFor='event'>Event</FormLabel>
      <Select placeholder='Select Event'>
        <option name='react-miami'>React Miami</option>
        <option name='dev-connect'>DevConnect</option>
      </Select>
      <FormLabel htmlFor='amount'>Funds Needed</FormLabel>
      <NumberInput>
        <NumberInputField step={0.01} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <FormLabel htmlFor='pitch'>Pitch</FormLabel>
      <Textarea id='pitch' />
      <Button onSubmit={handleSubmit}>Lets Go</Button>
    </FormControl>
  )
}