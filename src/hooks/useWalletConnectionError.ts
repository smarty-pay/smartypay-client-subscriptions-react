/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {useEffect, useState} from 'react';


export function useWalletConnectionError(){

  const [connectionError, setConnectionError] = useState(SmartyPaySubscriptionsBrowser.getWalletLastConnectionError());
  useEffect(() => {
    function updateState() {
      setConnectionError(SmartyPaySubscriptionsBrowser.getWalletLastConnectionError());
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('wallet-connection-error', updateState);
    SmartyPaySubscriptionsBrowser.addListener('wallet-connected', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return connectionError;
}