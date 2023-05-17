export interface BaconText {
    loading: boolean;
    error: string;
    text: string;
    speed: number;
    correctWord: number;
    wrongWord: number;
    isGameStarted: boolean;
    isOptionsInstalled: boolean;
    time: number;
    currentIndex: number;
    textError: boolean;
    textFromKeyboard: string[];
    mode: TypingTestModes;
}

export enum TypingTestModes {
    eng = 'eng',
    rus = 'rus',
}
