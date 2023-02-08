/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscriptions';
import {useEffect, useState} from 'react';


export function useUpdatingSubscriptions(){

  const [list, setList] = useState<string[]>(SmartyPaySubscriptionsBrowser.getUpdatingSubscriptions());
  useEffect(() => {
    function updateState() {
      setList(SmartyPaySubscriptionsBrowser.getUpdatingSubscriptions());
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('subscription-updating', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);

  return list;
}