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

declare const window: any

export default function BeginModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mb={[0, 2]}>
      <Button size='lg' minW='15vw' bg='none' border='1.5px solid black'
        fontSize='xl' boxShadow='0px 0px 15px #a5a5a5' _hover={{
          boxShadow: '0px 0px 35px #a5a5a5',
          bg: '#eee', color: 'black'
        }} color='#fff' onClick={onOpen}>
        Get Started
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size='lg'>
        <ModalOverlay bg='none'
          backdropFilter='auto'
          backdropInvert='10%'
          backdropBlur='3px'
        />
        <ModalContent>
          <ModalBody p={6}>
            <Form onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box >
  )
}