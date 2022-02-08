import { Flex, Grid, Icon, Heading, GridItem, Spacer } from '@chakra-ui/react';
import { FaWpforms, FaUserClock, FaPlaneDeparture } from 'react-icons/fa'

export default function Pitches() {

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={8}>
      <GridItem p={3} bg='#eee'>
        <Icon as={FaWpforms} w={8} h={8} />
        <Heading size='lg'>Pitch</Heading>
        <Heading size='sm'>Hey</Heading>
        <Heading size='xs'>Hey</Heading>
      </GridItem>
      <GridItem p={3} bg='#eee'>
        <Icon as={FaUserClock} w={8} h={8} />
        <Heading size='lg'>Wait</Heading>
        <Heading size='sm'>Hey</Heading>
        <Heading size='xs'>Hey</Heading>
      </GridItem>
      <GridItem p={3} bg='#eee'>
        <Icon as={FaPlaneDeparture} w={8} h={8} />
        <Heading size='lg'>Depart</Heading>
        <Heading size='sm'>Hey</Heading>
        <Heading size='xs'>Hey</Heading>
      </GridItem>
    </Grid >
  );
}