import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { testSlice } from '../../entities/test/model/slice';

const rootReducer = combineReducers({
    test: testSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
