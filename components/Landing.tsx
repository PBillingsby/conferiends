import { Box, Heading, HStack, Stack, Button, Link } from '@chakra-ui/react';
import Underline from './Underline'
export default function Landing() {
  return (
    <Box>
      <Heading size='2xl' color='blue.800'>Making conferences</Heading>
      <HStack pb={6}>
        <Heading size='2xl' color='blue.800'>more</Heading>
        <Stack pt={6}>
          <Heading size='2xl' bgGradient='linear(to-r, #E49882, #C76173 70%, #9A7BC3 100%)' bgClip='text'>accessible</Heading>
          <Underline />
        </Stack>
      </HStack>
      <Heading size='md' w='40%' py={2} fontWeight='light' color='gray' mb={6}>We match talented individuals with generous benefactors to help fund trips to life changing conferences</Heading>
      <Button size='md' bg='#000' color='#fff' hover={
        {
          disabled: {
            opacity: '0.9'
          }
        }
      }><Link href={'/'}>Get Started</Link></Button>
    </Box >
  );
}
