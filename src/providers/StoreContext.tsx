"use client"

import { TStore, createOptionStore, initOptionStore } from '@/store'
import { type ReactNode, createContext, useRef } from 'react'
import { type StoreApi } from 'zustand'

export const OptionStoreContext = createContext<StoreApi<TStore> | undefined>(undefined)

export type TStoreProviderProps = {
    children: ReactNode
}

export function OptionStoreProvider({children}: TStoreProviderProps) {

    const storeRef = useRef<StoreApi<TStore>>()
    if (!storeRef.current) {
      storeRef.current = createOptionStore(initOptionStore())
    }

    return (
        <OptionStoreContext.Provider value={storeRef.current}>
            {children}
        </OptionStoreContext.Provider>
    )
}