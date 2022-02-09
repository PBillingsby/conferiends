import { GridItem } from '@chakra-ui/react';
const Pitches = ({ children }: { children: JSX.Element[] }) => {
  return (
    <GridItem p={3} bg='#eee' borderRadius='8'>
      {children}
    </GridItem>
  );
}

export default Pitches