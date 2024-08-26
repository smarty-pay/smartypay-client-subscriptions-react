/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import { useEffect, useState } from 'react';
import { SmartyPaySubscriptionsBrowser } from 'smartypay-client-subscriptions';

export function useSmartyApiLastError() {
  const [apiLastError, setApiLastError] = useState(SmartyPaySubscriptionsBrowser.getApiLastError());
  useEffect(() => {
    function updateState() {
      setApiLastError(SmartyPaySubscriptionsBrowser.getApiLastError());
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('api-error', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return apiLastError;
}
