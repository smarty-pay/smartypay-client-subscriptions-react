/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {useEffect, useState} from 'react';


export function useOldConnectedWallet(){

  const [oldName, setOldName] = useState(SmartyPaySubscriptionsBrowser.getOldConnectedWallet());
  useEffect(() => {
    function updateState() {
      setOldName(SmartyPaySubscriptionsBrowser.getOldConnectedWallet());
    }

    SmartyPaySubscriptionsBrowser.addListener('wallet-connected', updateState);
    SmartyPaySubscriptionsBrowser.addListener('wallet-disconnected', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return oldName;
}