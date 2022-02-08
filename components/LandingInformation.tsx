import { Box, Heading, Flex } from '@chakra-ui/react';
import Pitches from './Pitches'
export default function LandingInformation() {
  return (
    <Flex>
      <Box>
        <Heading size='lg' mb='4' color='teal.400'>How to pitch</Heading>
        <Pitches />
      </Box>
      <Box>
        <Heading size='lg' mb='4' color='teal.400'>How to fund</Heading>
        <Pitches />
      </Box>
    </Flex>
  );
}
