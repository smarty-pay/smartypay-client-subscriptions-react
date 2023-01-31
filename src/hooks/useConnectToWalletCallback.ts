import {useCallback} from 'react';
import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {Web3ApiProvider} from 'smartypay-client-web3-common';
import {Name} from './index';


export function useConnectToWalletCallback(provider: Web3ApiProvider){
  return useCallback(() => {
    SmartyPaySubscriptionsBrowser.connectToWallet(provider).catch(e => {
      console.error(`${Name}: Can not connect to wallet`, e);
    });
  }, [provider]);
}