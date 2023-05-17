import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import { fetchText } from '../../model';
import './styles.scss';
import { gameStatus, incCorrectWord, incWrongWord } from '../../model/slice';

export function TestText() {
    const dispatch = useAppDispatch();
    const text = useAppSelector((state) => state.test.text).split('');
    const [textFromKeyboard, setTextFromKeyboard] = useState<string[]>([]);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchText());
    }, [dispatch]);

    useEffect(() => {
        const onKeypress = (e: KeyboardEvent) => {
            dispatch(gameStatus(true));
            if (e.key === text[textFromKeyboard.length]) {
                dispatch(incCorrectWord());
                setError(false);
                setTextFromKeyboard((prev) => [...prev, e.key]);
            } else {
                if (!error) {
                    dispatch(incWrongWord());
                }
                setError(true);
            }
        };

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [dispatch, textFromKeyboard, text, error]);

    return (
        <span className="fs-4">
            {text.map((item, index) => {
                if (item === textFromKeyboard[index]) {
                    return (
                        <span className="text-success" key={v4()}>
                            {item}
                        </span>
                    );
                }
                if (index === textFromKeyboard.length || textFromKeyboard.length === undefined) {
                    if (error) {
                        return (
                            <span className="wrong-word text-white" key={v4()}>
                                {item}
                            </span>
                        );
                    }
                    return (
                        <span className="current-word text-white" key={v4()}>
                            {item}
                        </span>
                    );
                }
                return <span key={v4()}>{item}</span>;
            })}
        </span>
    );
}
