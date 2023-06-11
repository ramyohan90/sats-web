import { createSlice } from '@reduxjs/toolkit';
import { InitThemeState } from '../initialize';
import { ThemeState } from '../types';

interface IProps {
    type: string;
    payload: ThemeState
}

const ThemeSlice = createSlice({
    name: 'theme',
    initialState: InitThemeState,
    reducers: {
        ThemeSliceReducer: (state: ThemeState) => {
            // if (action.payload) {
            //     return action.payload;
            // }
            state.isDark = !state.isDark;
            return state;
        },
        resetThemeReducer: (state) => {
            state.isDark = false;
            return state;
        }
    }
})

export const { ThemeSliceReducer, resetThemeReducer } = ThemeSlice.actions;
export default ThemeSlice.reducer;