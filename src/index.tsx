/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {useWalletConnecting} from './hooks/useWalletConnecting';
import {useWalletConnected} from './hooks/useWalletConnected';
import {useWalletName} from './hooks/useWalletName';
import {useWalletAddress} from './hooks/useWalletAddress';
import {useWalletChainId} from './hooks/useWalletChainId';
import {useOldConnectedWallet} from './hooks/useOldConnectedWallet';
import {useSmartyApiLocked} from './hooks/useSmartyApiLocked';
import {useSmartyApiLastError} from './hooks/useSmartyApiLastError';
import {useUpdatingSubscriptions} from './hooks/useUpdatingSubscriptions';
import {useUpdatingSubscriptionsPlans} from './hooks/useUpdatingSubscriptionsPlans';
import {useConnectToWalletCallback} from './hooks/callback/useConnectToWalletCallback';
import {useDisconnectFromWalletCallback} from './hooks/callback/useDisconnectFromWalletCallback';
import {useSwitchWalletToAssetNetworkCallback} from './hooks/callback/useSwitchWalletToAssetNetworkCallback';
import {useSwitchWalletToNetworkCallback} from './hooks/callback/useSwitchWalletToNetworkCallback';
import {useAddCurrencyTokenToWalletCallback} from './hooks/callback/useAddCurrencyTokenToWalletCallback';
import {useAddTokenToWalletCallback} from './hooks/callback/useAddTokenToWalletCallback';
import {
  restoreOldWalletConnectionFromAny,
  SmartyPaySubscriptionsBrowser,
  SmartyPaySubscriptionsBrowserEvent,
  ActivateSubscriptionInWalletProps,
  TokenMaxAbsoluteAmount,
  TokenZeroAmount,
} from 'smartypay-client-subscriptions';
import {Subscription, util} from 'smartypay-client-model';

export {
  SmartyPaySubscriptionsBrowserEvent,
  restoreOldWalletConnectionFromAny,
}

export {
  ActivateSubscriptionInWalletProps,
}

export {
  TokenMaxAbsoluteAmount,
  TokenZeroAmount,
}

export {
  useWalletName,
  useWalletConnecting,
  useWalletConnected,
  useWalletAddress,
  useWalletChainId,
  useOldConnectedWallet,
  useSmartyApiLocked,
  useSmartyApiLastError,
  useUpdatingSubscriptions,
  useUpdatingSubscriptionsPlans,
}

export {
  useConnectToWalletCallback,
  useDisconnectFromWalletCallback,
  useSwitchWalletToAssetNetworkCallback,
  useSwitchWalletToNetworkCallback,
  useAddCurrencyTokenToWalletCallback,
  useAddTokenToWalletCallback,
}

export type SubscriptionsEvent = util.Event;
export type SubscriptionsEventListener = (event: SubscriptionsEvent)=>void;

export function addSubscriptionsListener(event: SmartyPaySubscriptionsBrowserEvent, listener: SubscriptionsEventListener) {
  SmartyPaySubscriptionsBrowser.addListener(event, listener);
}

export function addSubscriptionsGlobalListener(listener: SubscriptionsEventListener) {
  SmartyPaySubscriptionsBrowser.addGlobalListener(listener);
}

export function removeSubscriptionsListener(listener: SubscriptionsEventListener) {
  SmartyPaySubscriptionsBrowser.removeListener(listener);
}

export async function isValidBalanceToPay(subscription: Subscription){
  return SmartyPaySubscriptionsBrowser.isValidBalanceToPay(subscription);
}

export async function activateSubscriptionInWallet(
  subscriptionGetter: ()=>Promise<Subscription|undefined>,
  props?: ActivateSubscriptionInWalletProps,
){
  return SmartyPaySubscriptionsBrowser.activateSubscriptionInWallet(subscriptionGetter, props);
}

export async function pauseSubscriptionInWallet(subscriptionGetter: ()=>Promise<Subscription|undefined>){
  return SmartyPaySubscriptionsBrowser.pauseSubscriptionInWallet(subscriptionGetter);
}

export async function unPauseSubscriptionInWallet(subscriptionGetter: ()=>Promise<Subscription|undefined>){
  return SmartyPaySubscriptionsBrowser.unPauseSubscriptionInWallet(subscriptionGetter);
}

export async function cancelSubscriptionInWallet(subscriptionGetter: ()=>Promise<Subscription|undefined>){
  return SmartyPaySubscriptionsBrowser.cancelSubscriptionInWallet(subscriptionGetter);
}
