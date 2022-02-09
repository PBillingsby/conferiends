import { Box, Heading, Container, Flex, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react';
import Pitches from './Pitches';
import Funds from './Funds'
export default function LandingInformation() {
  return (
    <Flex>
      <Box>
        <Heading size='lg' color='blue.400'>How it works</Heading>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </Text>
      </Box>
      <Container>
        <Tabs variant='line' vh='100%'>
          <TabList color='blue.400'>
            <Tab><Heading size='md'>Pitch</Heading></Tab>
            <Tab><Heading size='md'>Fund</Heading></Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Pitches />
            </TabPanel>
            <TabPanel>
              <Funds />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </Flex>
  );
}
