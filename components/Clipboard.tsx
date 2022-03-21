import {
  IconButton,
  InputRightElement,
  useToast,
} from '@chakra-ui/react'
import { Copy } from 'tabler-icons-react';

interface ClipboardProps {
  walletAddress: string;
}

export default function Clipboard(props: ClipboardProps) {
  const toast = useToast({
    containerStyle: {
      width: '20vw',
      maxWidth: '100%',
      bgColor: 'gray.800'
    },
  })
  function handleAddressCopy() {
    navigator.clipboard.writeText(props.walletAddress);    
    toast({
      title: 'Copied',
      status: 'success',
      isClosable: true,
    });
  }

  return (
    <InputRightElement><IconButton aria-label='Copy address' size='xs' p={1}
      icon={<Copy />} onClick={() => handleAddressCopy()} />
    </InputRightElement>
  )
}