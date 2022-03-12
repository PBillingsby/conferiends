import { useState, useEffect } from 'react'
import ModalForm from './ModalForm'

import {
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Box,
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
        <ModalBody >
          <ModalForm />
        </ModalBody>
      </ModalContent>
    </Box>
  )
}