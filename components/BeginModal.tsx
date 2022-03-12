import { useState, useEffect } from 'react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Flex,
  Text,
  useDisclosure
} from "@chakra-ui/react"

export default function BeginModal() {
  return (
    <Box>
      <ModalOverlay bg='none'
        backdropFilter='auto'
        backdropInvert='10%'
        backdropBlur='3px'
      />
      <ModalContent pt={6}>
        <ModalCloseButton />
        <ModalBody>
          <Text>Hey</Text>
          <Flex pt={4}>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Box>
  )
}