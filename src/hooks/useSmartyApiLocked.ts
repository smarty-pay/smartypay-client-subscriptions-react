/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {useEffect, useState} from 'react';


export function useSmartyApiLocked(){

  const [isApiLocked, setApiLocked] = useState<boolean>(SmartyPaySubscriptionsBrowser.isApiLocked());
  useEffect(() => {
    function updateState() {
      setApiLocked(SmartyPaySubscriptionsBrowser.isApiLocked());
    }

    SmartyPaySubscriptionsBrowser.addListener('api-locked', updateState);
    SmartyPaySubscriptionsBrowser.addListener('api-unlocked', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);
  return isApiLocked;
}