/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import {SmartyPaySubscriptionsBrowser} from 'smartypay-client-subscrptions';
import {useEffect, useState} from 'react';


export function useUpdatingSubscriptionsPlans(){

  const [plans, setPlans] = useState<string[]>(SmartyPaySubscriptionsBrowser.getUpdatingSubscriptionsPlans());
  useEffect(() => {
    function updateState() {
      setPlans(SmartyPaySubscriptionsBrowser.getUpdatingSubscriptionsPlans());
    }

    updateState();

    SmartyPaySubscriptionsBrowser.addListener('subscription-updating', updateState);

    return () => {
      SmartyPaySubscriptionsBrowser.removeListener(updateState);
    };
  }, []);

  return plans;
}