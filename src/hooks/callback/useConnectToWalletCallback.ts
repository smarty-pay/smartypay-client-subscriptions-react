/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/
import { useCallback } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

import { Name } from '../index';

import type { Web3ApiProvider } from 'smartypay-client-web3-common';

export function useConnectToWalletCallback(provider: Web3ApiProvider) {
  return useCallback(() => {
    // wallet already connected
    if (SmartyPaySubscriptionsBrowser.isWalletConnected()) {
      return;
    }

    SmartyPaySubscriptionsBrowser.connectToWallet(provider).catch((e) => {
      console.error(`${Name}: Can not connect to wallet`, e);
    });
  }, [provider]);
}
