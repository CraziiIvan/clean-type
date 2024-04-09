"use client"

import { useContext } from "react";
import { OptionStoreContext } from "@/providers/StoreContext";
import { useStore } from "zustand";

export default function useOptionStore() {
    const optionStore = useContext(OptionStoreContext)

    if (!optionStore) {
        throw new Error(`useOptionStore must be use within OptionStoreProvider`)
    }

    return useStore(optionStore)
}