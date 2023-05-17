import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface BaconText {
    loading: boolean;
    error: string;
    text: string;
    textErrors: number;
    speed: number;
    correctWord: number;
    wrongWord: number;
    isGameStarted: boolean;
}

const initialState: BaconText = {
    loading: false,
    error: '',
    text: '',
    textErrors: 0,
    speed: 0,
    correctWord: 0,
    wrongWord: 0,
    isGameStarted: false,
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
        gameStatus(state, action: PayloadAction<boolean>) {
            state.isGameStarted = action.payload;
        },
        incCorrectWord(state) {
            state.correctWord += 1;
        },
        incWrongWord(state) {
            state.wrongWord += 1;
        },
    },
});

export const { fetching, fetchSuccess, fetchError, gameStatus, incCorrectWord, incWrongWord } = testSlice.actions;
