/*
  Smarty Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { useEffect, useState } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

export function useWalletName() {
  const [walletName, setWalletName] = useState(SmartyPaySubscriptionsBrowser.getWalletName());

  useEffect(() => {
    function updateState() {
      setWalletName(SmartyPaySubscriptionsBrowser.getWalletName());
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('wallet-connected', updateState);
    SmartyPaySubscriptionsBrowser.addListener('api-unlocked', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return walletName;
}
