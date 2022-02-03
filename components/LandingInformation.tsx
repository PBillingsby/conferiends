import { Box, Heading } from '@chakra-ui/react';
import PitchGrid from './PitchGrid'
export default function LandingInformation() {
  return (
    <Box>
      <Heading size='lg' color='teal.400'>How it works</Heading>
      <PitchGrid />

    </Box>
  );
}
