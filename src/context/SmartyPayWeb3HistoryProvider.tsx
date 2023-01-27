/*
  SMARTy Pay Client Subscriptions React
  @author Evgeny Dolganov <evgenij.dolganov@gmail.com>
*/

import React from 'react';
import {createContext, useContext, useMemo, useState} from 'react';
import {getLastWeb3ApiName} from 'smartypay-client-web3-common';
import {clearLastWeb3ApiName, storeLastWeb3ApiName} from 'smartypay-client-web3-common/src/web3-api-history';



export interface ContextState {
  lastWeb3ApiName: string,
  setLastWeb3ApiName(name: string),
  clearLastWeb3ApiName(),
}

export const SmartyPayWeb3HistoryContext = createContext<ContextState>({} as any);

export function SmartyPayWeb3HistoryProvider({ children }){

  const [lastWeb3ApiName, setLastWeb3ApiName] = useState<string>(getLastWeb3ApiName());
  const value = useMemo<ContextState>(() => {
    return {
      lastWeb3ApiName,
      setLastWeb3ApiName: (name: string)=> {
        setLastWeb3ApiName(name);
        storeLastWeb3ApiName(name);
      },
      clearLastWeb3ApiName: ()=>{
        clearLastWeb3ApiName();
      }
    }
  }, [lastWeb3ApiName, setLastWeb3ApiName]);

  return (
    <SmartyPayWeb3HistoryContext.Provider value={value}>
      {children}
    </SmartyPayWeb3HistoryContext.Provider>
  );
}


export function useSmartyPayWeb3History(){
  return useContext(SmartyPayWeb3HistoryContext);
}