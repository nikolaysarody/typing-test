import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface BaconText {
    loading: boolean;
    error: string;
    text: string;
    textErrors: number;
    speed: number;
}

const initialState: BaconText = {
    loading: false,
    error: '',
    text: '',
    textErrors: 0,
    speed: 0,
};

export const testSlice = createSlice({
    name: 'texts',
    initialState,
    reducers: {
        fetching(state) {
            state.loading = true;
        },
        fetchSuccess(state, action: PayloadAction<string>) {
            state.loading = false;
            state.text = action.payload;
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.loading = false;
            state.error = action.payload.message;
        },
    },
});

export const { fetching, fetchSuccess, fetchError } = testSlice.actions;
