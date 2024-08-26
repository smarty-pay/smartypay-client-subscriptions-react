/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { useEffect, useState } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

import { Name } from './index';

export function useWalletAddress() {
  const [address, setAddress] = useState<string | undefined>(undefined);

  useEffect(() => {
    async function updateState() {
      try {
        const actualAddress = await SmartyPaySubscriptionsBrowser.getWalletAddress();
        setAddress(actualAddress);
      } catch (e) {
        console.error(`${Name}: Can not get wallet address`, e);
      }
    }

    // async
    updateState().catch(console.error);

    SmartyPaySubscriptionsBrowser.addListener('wallet-connected', updateState);
    SmartyPaySubscriptionsBrowser.addListener('wallet-disconnected', updateState);
    SmartyPaySubscriptionsBrowser.addListener('wallet-account-changed', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return address;
}
