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
      <Button size='md' bg='#000' color='#fff' onClick={() => onOpen()}>
        Get Started
    </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent pt={5}>
          <ModalCloseButton />
          <ModalBody >
            <Heading size='md'>Choose your destiny</Heading>
            <Flex pt={4}>
              <Box>
                <Link href='/pitches/new'>Pitch</Link>
              </Box>
              <Spacer />
              <Link href='pitches'>Fund</Link>

            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}