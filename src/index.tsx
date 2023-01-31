/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {useWalletConnected} from './hooks/useWalletConnected';
import {useWalletName} from './hooks/useWalletName';
import {useWalletAddress} from './hooks/useWalletAddress';
import {useWalletChainId} from './hooks/useWalletChainId';
import {useOldConnectedWallet} from './hooks/useOldConnectedWallet';
import {useConnectToWalletCallback} from './hooks/useConnectToWalletCallback';
import {useDisconnectFromWalletCallback} from './hooks/useDisconnectFromWalletCallback';
import {useSmartyApiLocked} from './hooks/useSmartyApiLocked';
import {useCanConnectToWallet} from './hooks/useCanConnectToWallet';

export {
  useWalletName,
  useWalletConnected,
  useWalletAddress,
  useWalletChainId,
  useOldConnectedWallet,
  useConnectToWalletCallback,
  useDisconnectFromWalletCallback,
  useSmartyApiLocked,
  useCanConnectToWallet,
}

