import { Box, Heading, HStack, Stack } from '@chakra-ui/react';
import Underline from './Underline'
import BeginModal from './BeginModal'
export default function Landing() {
  return (
    <Box pt={64}>
      <Heading size='2xl'>Making conferences</Heading>
      <HStack pb={6}>
        <Heading size='2xl'>more</Heading>
        <Stack pt={6}>
          <Heading size='2xl' bgGradient='linear(to-r, #E49882, #C76173 70%, #9A7BC3 100%)' bgClip='text'>accessible</Heading>
          <Underline />
        </Stack>
      </HStack>
      <Heading size='md' w='40%' py={2} fontWeight='light' color='gray.400' mb={6}>We match talented individuals with generous benefactors to help fund trips to life changing conferences</Heading>
      <BeginModal />
    </Box >
  );
}
