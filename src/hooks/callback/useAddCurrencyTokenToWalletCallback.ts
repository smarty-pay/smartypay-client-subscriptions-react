/*
  Smarty Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/
import { useCallback } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

import { Name } from '../index';

import type { Currency } from 'smartypay-client-model';

export function useAddCurrencyTokenToWalletCallback(currency: Currency) {
  return useCallback(() => {
    SmartyPaySubscriptionsBrowser.addCurrencyTokenToWallet(currency).catch((e) => {
      console.error(`${Name}: Can not add currency token to wallet`, e);
    });
  }, [currency]);
}
