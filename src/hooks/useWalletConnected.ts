/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {useEffect, useState} from 'react';


export function useWalletConnected(){

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