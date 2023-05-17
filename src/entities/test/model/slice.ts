import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface BaconText {
    loading: boolean;
    error: string;
    text: string;
    speed: number;
    correctWord: number;
    wrongWord: number;
    isGameStarted: boolean;
    time: number;
    currentIndex: number;
    textError: boolean;
    textFromKeyboard: string[];
}

const initialState: BaconText = {
    loading: false,
    error: '',
    text: '',
    speed: 0,
    correctWord: 0,
    wrongWord: 0,
    isGameStarted: false,
    time: 0,
    currentIndex: 0,
    textError: false,
    textFromKeyboard: [],
};

const testSlice = createSlice({
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
        incTime(state) {
            state.time += 1;
        },
        setCurrentIndex(state, action: PayloadAction<number>) {
            state.currentIndex = action.payload;
        },
        setTextError(state, action: PayloadAction<boolean>) {
            state.textError = action.payload;
        },
        clearGame(state) {
            state.speed = 0;
            state.correctWord = 0;
            state.wrongWord = 0;
            state.isGameStarted = false;
            state.time = 0;
            state.currentIndex = 0;
            state.textError = false;
            state.textFromKeyboard = [];
        },
        addTextFromKeyboard(state, action: PayloadAction<string>) {
            state.textFromKeyboard = [...state.textFromKeyboard, action.payload];
        },
    },
});

export const {
    fetching,
    fetchSuccess,
    fetchError,
    gameStatus,
    incCorrectWord,
    incWrongWord,
    incTime,
    clearGame,
    setCurrentIndex,
    setTextError,
    addTextFromKeyboard,
} = testSlice.actions;

export const testReducer = testSlice.reducer;
