import { useRouter } from 'next/router'
import { useWallet } from '@web3-ui/core';
import { useEffect } from 'react';

export default function New() {
  const { connected } = useWallet();
  const router = useRouter();
  // useEffect(() => {
  //   if (connected) {
  //     router.push('/');
  //   }
  // })
  return <p>saljdhflskdajfdsa</p>
}