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
import {useConnectToWalletCallback} from './hooks/useConnectToWalletCallback';
import {useDisconnectFromWalletCallback} from './hooks/useDisconnectFromWalletCallback';
import {useSmartyApiLocked} from './hooks/useSmartyApiLocked';
import {useSmartyApiLastError} from './hooks/useSmartyApiLastError';
import {
  SubscriptionPlan,
  SubscriptionPlanStatus,
  Subscription,
  SubscriptionStatus,
  SubscriptionId,
  SubscriptionCharge,
  SubscriptionChargeStatus,
} from 'smartypay-client-subscrptions';

export {
  SubscriptionPlan,
  SubscriptionPlanStatus,
  Subscription,
  SubscriptionStatus,
  SubscriptionId,
  SubscriptionCharge,
  SubscriptionChargeStatus,
}

export {
  useWalletName,
  useWalletConnecting,
  useWalletConnected,
  useWalletAddress,
  useWalletChainId,
  useOldConnectedWallet,
  useConnectToWalletCallback,
  useDisconnectFromWalletCallback,
  useSmartyApiLocked,
  useSmartyApiLastError,
}

