import { Spacer, HStack, Heading, Link } from '@chakra-ui/react';
import IconVector from './IconVector'

export default function NavBar() {
  return (
    <HStack px={8} pb={8} w='100vw' position='fixed'>
      <IconVector isNavBar={true} />
      <Heading size='lg' bg='linear(to-r, #E49882, #C76173 70%, #9A7BC3 100%)'>
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