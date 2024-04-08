import { createStore } from "zustand";

export type TOptionStates = {
    active: string
    quote: 10 | 25 | 50 | 100
    timer: 15 | 30 | 60 | 120
}

export type TOptionActions = {
    setActive: (title: string) => void
}

export type TOptionStore = TOptionStates & TOptionActions

export const initOptionStore = (): TOptionStates => {
    return { active: "quote", quote: 25, timer: 30 }
}

export const defaultInitState: TOptionStates = {
    active: "quote",
    quote: 25,
    timer: 30,
}

export const createOptionStore = (
    initState: TOptionStates = defaultInitState,
) => {
    return createStore<TOptionStore>()((set) => ({
        ...initState,
        setActive: (title) => set(() => ({ active: title}))
    }));
}
