import {useCallback} from 'react';
import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {Name} from '../index';


export function useDisconnectFromWalletCallback(){
  return useCallback(() => {
    SmartyPaySubscriptionsBrowser.disconnectFromWallet().catch(e => {
      console.error(`${Name}: Can not disconnect from wallet`, e);
    });
  }, []);
}