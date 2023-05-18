export interface TestState {
    isLoading: boolean;
    isLoadingError: string;
    text: string[];
    speed: number;
    correctWord: number;
    wrongWord: number;
    isGameFinished: boolean;
    isGameStarted: boolean;
    isOptionsInstalled: boolean;
    time: number;
    currentIndex: number;
    textError: boolean;
    textFromKeyboard: string[];
    gameMode: TypingTestModes;
}

export enum TypingTestModes {
    eng = 'eng',
    rus = 'rus',
}
