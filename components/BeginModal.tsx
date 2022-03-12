import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Link,
  Flex,
  Spacer,
  Heading,
  useDisclosure
} from "@chakra-ui/react"

export default function BeginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box>
      <Button size='lg' bg='none' border='1.5px solid black' fontSize='xl' boxShadow='0px 0px 15px #a5a5a5' _hover={{ boxShadow: '0px 0px 35px #a5a5a5', bg: '#eee', color: 'black' }} color='#fff' onClick={() => onOpen()}>
        Get Started
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='none'
          backdropFilter='auto'
          backdropInvert='10%'
          backdropBlur='3px'
        />
        <ModalContent pt={5}>
          <ModalCloseButton />
          <ModalBody>
            <Heading size='md'>Choose your destiny</Heading>
            <Flex pt={4}>

            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}