import { Grid, Icon, Heading, Text } from '@chakra-ui/react';
import { FaWpforms, FaUserClock, FaPlaneDeparture } from 'react-icons/fa'
import GridItem from './GridItem'
export default function Funds() {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={8} color='blue.400'>
      <GridItem>
        <Icon as={FaWpforms} w={8} h={8} />
        <Heading size='lg'>Scout</Heading>
        <Text>Find a pitch to fund</Text>
      </GridItem>
      <GridItem>
        <Icon as={FaUserClock} w={8} h={8} />
        <Heading size='lg'>Fund</Heading>
        <Text>Send funds to select member</Text>
      </GridItem>
      <GridItem>
        <Icon as={FaPlaneDeparture} w={8} h={8} />
        <Heading size='lg'>Satisfy</Heading>
        <Text>Feel good sending someone</Text>
      </GridItem>
    </Grid>
  );
}