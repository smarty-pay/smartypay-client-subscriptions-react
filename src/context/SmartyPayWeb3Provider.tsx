import React from 'react';
import {createContext, useContext, useMemo, useState} from 'react';
import {Web3Api} from 'smartypay-client-web3-common';



export interface ContextState {
  web3Api: Web3Api|undefined,
  setWeb3Api(api: Web3Api),
}

export const SmartyPayWeb3Context = createContext<ContextState>({} as any);

export function SmartyPayWeb3Provider({ children }){

  const [web3Api, setWeb3Api] = useState<Web3Api|undefined>(undefined);
  const value = useMemo<ContextState>(() => ({web3Api, setWeb3Api}), [web3Api, setWeb3Api]);

  return (
    <SmartyPayWeb3Context.Provider value={value}>
      {children}
    </SmartyPayWeb3Context.Provider>
  );
}


export function useSmartyPayWeb3Context(){
  return useContext(SmartyPayWeb3Context);
}