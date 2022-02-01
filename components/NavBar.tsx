import { Heading, Box, HStack } from '@chakra-ui/react';

export default function NavBar() {
  return (
    <Box w="100" p='2' mb='5' background="#eee">
      <HStack>
        <Heading size="xl" color="#">
          Conferiends
        </Heading>
      </HStack>
    </Box>
  )
}