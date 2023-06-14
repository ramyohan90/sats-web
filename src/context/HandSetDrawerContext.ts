
import { createContext, Dispatch } from "react";


export interface HandsetDrawerState {
    isHandsetOpen: boolean;
    currentScreen: string | null; // Not using this anywhere. In future we can remove this if not needed.
}

export interface HandsetDrawerStateContextType {
    type: string;
    payload: HandsetDrawerState;
}

export interface HandsetDrawerStateContextState {
    isDrawerOpen: HandsetDrawerState | null,
    setHandsetDrawerState: Dispatch<HandsetDrawerStateContextType>
}

export const HandsetDrawerStateInitialValue: HandsetDrawerState = {
    isHandsetOpen: false,
    currentScreen: 'main',
}

export const HandsetDrawerStateContextStateData: HandsetDrawerStateContextState = {
    isDrawerOpen: HandsetDrawerStateInitialValue,
    setHandsetDrawerState: () => {}
}

export const HandsetDrawerStateContext = createContext<HandsetDrawerStateContextState>(HandsetDrawerStateContextStateData);

