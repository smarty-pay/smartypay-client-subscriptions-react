/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {useEffect, useState} from 'react';


export function useWalletName(){

  const [walletName, setWalletName] = useState(SmartyPaySubscriptionsBrowser.getWalletName());
  useEffect(() => {
    function updateState() {
      setWalletName(SmartyPaySubscriptionsBrowser.getWalletName());
    }

    SmartyPaySubscriptionsBrowser.addListener('blocking-operation-end', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return walletName;
}