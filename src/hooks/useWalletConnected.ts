/*
  Smarty Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { useEffect, useState } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

export function useWalletConnected() {
  const [isConnected, setIsConnected] = useState(SmartyPaySubscriptionsBrowser.isWalletConnected());

  useEffect(() => {
    function updateState() {
      setIsConnected(SmartyPaySubscriptionsBrowser.isWalletConnected());
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('wallet-connected', updateState);
    SmartyPaySubscriptionsBrowser.addListener('wallet-disconnected', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return isConnected;
}
