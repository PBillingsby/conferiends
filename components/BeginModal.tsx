
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Flex,
  Box,
  Spacer,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Select,
  Button,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputStepper,
  useDisclosure,
} from "@chakra-ui/react"

export default function BeginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const address = false;
  const connectWallet = (event: any) => {
    debugger
  }

  return (
    <Box mb={2}>
      <Button size='lg' minW='15vw' bg='none' border='1.5px solid black'
        fontSize='xl' boxShadow='0px 0px 15px #a5a5a5' _hover={{
          boxShadow: '0px 0px 35px #a5a5a5',
          bg: '#eee', color: 'black'
        }} color='#fff' onClick={address ? onOpen : connectWallet}>
        {address ? 'Get Started' : 'Connect Wallet'}
      </Button>
      <Modal size='lg' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='none'
          backdropFilter='auto'
          backdropInvert='10%'
          backdropBlur='3px'
        />
        <ModalContent pt={6}>
          <ModalBody p={6}>
            <Heading size='lg'>Pitch Form</Heading>
            <Text as='sup'>tell us more about your event, and why you&apos;d like funding to attend</Text>
            <FormControl>
              <FormLabel htmlFor='address'>Address</FormLabel>
              {/* <Input id='address' textAlign='center' type='text' value={!!connection.userAddress ? connection.userAddress : ''} isReadOnly /> */}
              <FormLabel htmlFor='event'>Event</FormLabel>
              <Select placeholder='Select Event'>
                <option value='react-miami'>React Miami</option>
                <option value='dev-connect'>DevConnect</option>
              </Select>
              <FormLabel htmlFor='amount'>Funds Needed</FormLabel>
              <NumberInput min={0} step={0.01}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <FormLabel htmlFor='pitch'>Pitch</FormLabel>
              <Textarea id='pitch' />
              <Flex mt={6}>
                <Button size='md'>Pitch</Button>
                <Spacer />
                <Button size='md' onClick={onClose}>Close</Button>
              </Flex>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}