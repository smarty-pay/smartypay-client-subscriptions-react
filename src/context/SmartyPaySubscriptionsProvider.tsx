/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import React from 'react';
import {SmartyPayWeb3Provider} from './SmartyPayWeb3Provider';
import {SmartyPayWeb3HistoryProvider} from './SmartyPayWeb3HistoryProvider';


export function SmartyPaySubscriptionsProvider({ children }){
  return (
    <SmartyPayWeb3Provider>
      <SmartyPayWeb3HistoryProvider>
        {children}
      </SmartyPayWeb3HistoryProvider>
    </SmartyPayWeb3Provider>
  )
}