import { Grid, Icon, Heading, Text } from '@chakra-ui/react';
import { FaWpforms, FaUserClock, FaPlaneDeparture } from 'react-icons/fa'
import GridItem from './GridItem'
export default function Pitches() {

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={8} color='blue.400'>
      <GridItem>
        <Icon as={FaWpforms} w={8} h={8} />
        <Heading size='lg'>Pitch</Heading>
        <Text>Find your event and pitch</Text>
      </GridItem>
      <GridItem>
        <Icon as={FaUserClock} w={8} h={8} />
        <Heading size='lg'>Wait</Heading>
        <Text>Patiently await funding</Text>
      </GridItem>
      <GridItem>
        <Icon as={FaPlaneDeparture} w={8} h={8} />
        <Heading size='lg'>Depart</Heading>
        <Text>If all goes to plan, depart for event</Text>
      </GridItem>
    </Grid>
  );
}