/*
  Smarty Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { useEffect, useState } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

export function useWalletConnecting() {
  const [isConnecting, setIsConnecting] = useState(SmartyPaySubscriptionsBrowser.isWalletConnecting());

  useEffect(() => {
    function updateState() {
      setIsConnecting(SmartyPaySubscriptionsBrowser.isWalletConnecting());
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('wallet-connecting', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return isConnecting;
}
