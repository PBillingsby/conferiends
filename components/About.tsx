import { Box, Heading, Text, HStack, Stack, Image } from '@chakra-ui/react';
import Underline from './Underline'
export default function About() {
  return (
    <Box>
      <Heading size='2xl' color='blue.800'>Making conferences</Heading>
      <HStack pb={6}>
        <Heading size='2xl' color='blue.800'>more</Heading>
        <Stack pt={6}>
          <Heading size='2xl' bgGradient='linear(to-l, #E49882, #C76173 70%, #9A7BC3 100%)' bgClip='text'>accessible</Heading>
          <Underline />
        </Stack>
      </HStack>
      <Heading size='lg' w='40%' py={3} fontWeight='light'>We match talented individuals with generous benefactors to help fund trips to life changing conferences</Heading>
    </Box>
  );
}
