import { Box, Button } from '@chakra-ui/react';
import { useWallet } from '@web3-ui/core';

export default function Landing() {
  const {
    connection,
    connectWallet,
    disconnectWallet,
    connected,
    correctNetwork,
    switchToCorrectNetwork
  } = useWallet();

  return (
    <Box border="black">
      {connected && <div>{connection.userAddress}</div>}
      {!connected && <Button onClick={connectWallet}>Connect Wallet</Button>}
    </Box>
  );
}
