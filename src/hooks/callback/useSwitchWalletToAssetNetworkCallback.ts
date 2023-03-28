/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/
import {useCallback} from 'react';
import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscriptions';
import {Name} from '../index';
import {Token} from 'smartypay-client-model';


export function useSwitchWalletToAssetNetworkCallback(token: Token){

  return useCallback(() => {
    SmartyPaySubscriptionsBrowser.switchWalletToAssetNetwork(token).catch(e => {
      console.error(`${Name}: Can not switch wallet to asset network`, e);
    });
  }, [token]);
}