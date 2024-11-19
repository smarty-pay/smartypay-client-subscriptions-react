/*
  Smarty Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { useEffect, useState } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

export function useOldConnectedWallet() {
  const [oldName, setOldName] = useState(SmartyPaySubscriptionsBrowser.getOldConnectedWallet());
  useEffect(() => {
    function updateState() {
      setOldName(SmartyPaySubscriptionsBrowser.getOldConnectedWallet());
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('wallet-connected', updateState);
    SmartyPaySubscriptionsBrowser.addListener('wallet-disconnected', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return oldName;
}
