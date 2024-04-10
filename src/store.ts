import { createStore } from "zustand";

export type TQoute = 10 | 25 | 50 | 100

export type TTimer = 15 | 30 | 60 | 120

export type TStoreStates = {
    active: string
    quote: TQoute
    timer: TTimer
    textWidth: number
}

export type TStoreActions = {
    setActive: (title: string) => void,
    setQuote: (option: TQoute) => void,
    setTimer: (option: TTimer) => void,
    setTextWidth: (option: number) => void,
}

export type TStore = TStoreStates & TStoreActions

export const initOptionStore = (): TStoreStates => {
    return { active: "quote", quote: 25, timer: 30, textWidth: 0 }
}

export const defaultInitState: TStoreStates = {
    active: "quote",
    quote: 25,
    timer: 30,
    textWidth: 0
}

export const createOptionStore = (
    initState: TStoreStates = defaultInitState,
) => {
    return createStore<TStore>()((set) => ({
        ...initState,
        setActive: (title) => set(() => ({ active: title})),
        setQuote: (option) => set(() => ({ quote: option})),
        setTimer: (option) => set(() => ({ timer: option})),
        setTextWidth: (width) => set(() => ({ textWidth: width})),
    }));
}
