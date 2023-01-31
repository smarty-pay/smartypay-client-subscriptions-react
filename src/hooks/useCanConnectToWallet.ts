/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {useEffect, useState} from 'react';
import {Web3ApiProvider} from '../../../smartypay-client-web3-common';


export function useCanConnectToWallet(provider: Web3ApiProvider){

  const [canConnect, setCanConnect] = useState<boolean>(false);
  useEffect(() => {
    function updateState() {
      const targetWallet = provider.name();
      const activeWallet = SmartyPaySubscriptionsBrowser.getWalletName();
      setCanConnect(!activeWallet || activeWallet === targetWallet);
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('api-unlocked', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return canConnect;
}