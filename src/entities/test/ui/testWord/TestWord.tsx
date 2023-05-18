import React from 'react';
import { useAppSelector } from '../../../../shared/hooks';
import './TestWord.scss';

interface TestWordProps {
    item: string;
    index: number;
    textFromKeyboard: string;
    currentIndex: number;
}

export function TestWord({ item, index, textFromKeyboard, currentIndex }: TestWordProps) {
    const textError = useAppSelector((state) => state.test.textError);

    if (item === textFromKeyboard) {
        return <span className="text-success">{item}</span>;
    }
    if (index === currentIndex) {
        if (textError) {
            return <span className="wrong-word text-white">{item}</span>;
        }
        return <span className="current-word text-white">{item}</span>;
    }
    return <span>{item}</span>;
}
