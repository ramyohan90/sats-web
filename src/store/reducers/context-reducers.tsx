import { HandsetDrawerState, HandsetDrawerStateContextType } from "../../context/HandSetDrawerContext";


export const HandsetDrawerReducer = (state: HandsetDrawerState, action:  HandsetDrawerStateContextType) => {
    switch (action.type) {
        case 'drawer':
                if (action.payload) {
                    state.isHandsetOpen = action.payload.isHandsetOpen;
                }
            return action.payload;
        default:
            return state;
    }
}