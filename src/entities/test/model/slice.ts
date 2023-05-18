import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { TestState, TypingTestModes } from './types';

const initialState: TestState = {
    isLoading: false,
    isLoadingError: '',
    text: [],
    speed: 0,
    correctWord: 0,
    wrongWord: 0,
    isGameFinished: false,
    isGameStarted: false,
    isOptionsInstalled: false,
    time: 0,
    currentIndex: 0,
    textError: false,
    textFromKeyboard: [],
    gameMode: TypingTestModes.rus,
};

const testSlice = createSlice({
    name: 'texts',
    initialState,
    reducers: {
        fetching(state) {
            state.isLoading = true;
        },
        fetchSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.text = action.payload.split('').map((item) => {
                if (item === 'ё') {
                    return 'е';
                }
                if (item === '—') {
                    return '-';
                }
                return item;
            });
        },
        fetchError(state, action: PayloadAction<Error>) {
            state.isLoading = false;
            state.isLoadingError = action.payload.message;
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
        clearGame() {
            return initialState;
        },
        addTextFromKeyboard(state, action: PayloadAction<string>) {
            state.textFromKeyboard = [...state.textFromKeyboard, action.payload];
        },
        setMode(state, action: PayloadAction<TypingTestModes>) {
            state.gameMode = action.payload;
        },
        startGame(state) {
            state.isOptionsInstalled = true;
        },
        finishGame(state) {
            state.isGameFinished = true;
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
    setMode,
    startGame,
    finishGame,
} = testSlice.actions;

export const testReducer = testSlice.reducer;
