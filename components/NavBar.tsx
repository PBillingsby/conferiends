import { useRouter } from 'next/router'

import { Spacer, Icon, HStack, Heading, Link } from '@chakra-ui/react';
import { Ticket } from 'tabler-icons-react';

export default function NavBar() {
  return (
    <HStack px={8} pb={8} w='100vw' position='fixed'>
      <Icon as={Ticket} w={8} h={8} />
      <Heading size='lg' color='white'>
        Conferiends
      </Heading>
      <Spacer />
      <HStack spacing={12} fontSize={['md', '2xl']}>
        <Link href='/'>
          Home
        </Link>
        <Link href='/pitches'>Fund Others</Link>
      </HStack >
    </HStack >
  )
}