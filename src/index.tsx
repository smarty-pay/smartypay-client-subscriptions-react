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
import {
  restoreOldWalletConnectionFromAny,
  SmartyPaySubscriptionsBrowser,
  SmartyPaySubscriptionsBrowserEvent,
} from 'smartypay-client-subscrptions';
import {Subscription, util} from 'smartypay-client-model';

export {
  SmartyPaySubscriptionsBrowserEvent,
  restoreOldWalletConnectionFromAny,
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

export async function activateSubscriptionInWallet(req: ()=>Promise<Subscription>){
  return SmartyPaySubscriptionsBrowser.activateSubscriptionInWallet(req);
}

export async function pauseSubscriptionInWallet(req: ()=>Promise<Subscription>){
  return SmartyPaySubscriptionsBrowser.pauseSubscriptionInWallet(req);
}

export async function unPauseSubscriptionInWallet(req: ()=>Promise<Subscription>){
  return SmartyPaySubscriptionsBrowser.unPauseSubscriptionInWallet(req);
}

export async function cancelSubscriptionInWallet(req: ()=>Promise<Subscription>){
  return SmartyPaySubscriptionsBrowser.cancelSubscriptionInWallet(req);
}
