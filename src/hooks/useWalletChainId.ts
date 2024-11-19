/*
  Smarty Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { useEffect, useState } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

import { Name } from './index';

export function useWalletChainId() {
  const [chainId, setChainId] = useState<number | undefined>(undefined);

  useEffect(() => {
    async function updateState() {
      try {
        const actualChainId = await SmartyPaySubscriptionsBrowser.getWalletChainId();
        setChainId(actualChainId);
      } catch (e) {
        console.error(`${Name}: Can not get wallet chainId`, e);
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
  return chainId;
}
