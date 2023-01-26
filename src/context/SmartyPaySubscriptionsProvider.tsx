import React from 'react';
import {SmartyPayWeb3Provider} from './SmartyPayWeb3Provider';


export function SmartyPaySubscriptionsProvider({ children }){
  return (
    <SmartyPayWeb3Provider>
      {children}
    </SmartyPayWeb3Provider>
  )
}