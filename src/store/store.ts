import { configureStore } from '@reduxjs/toolkit'
import ThemeSliceReducer from './reducers/slice';

export const store = configureStore({
    reducer: {
      theme: ThemeSliceReducer
    }
});

