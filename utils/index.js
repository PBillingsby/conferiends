import { useToast } from "@chakra-ui/react";
import { ethers } from 'ethers'

export const addressFormatter = (address) => {
  return `${address.slice(0, 6)}...${address.slice(address.length - 6)}`
}

export const walletConnect = async (toast) => {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    await provider.send("eth_requestAccounts", []);

    const signer = provider.getSigner();
    const address = await signer.getAddress();

    await address
    return address
  }
  else {
    toast({
      title: 'Must have MetaMask browser extension',
      status: 'error',
      isClosable: true,
    });
  }
}