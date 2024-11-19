/*
  Smarty Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/
import { useCallback } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

import { Name } from '../index';

import type { Network } from 'smartypay-client-model';

export function useSwitchWalletToNetworkCallback(network: Network) {
  return useCallback(() => {
    SmartyPaySubscriptionsBrowser.switchWalletToNetwork(network).catch((e) => {
      console.error(`${Name}: Can not switch wallet network`, e);
    });
  }, [network]);
}
