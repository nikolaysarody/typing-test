import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import { fetchText } from '../../model';
import './styles.scss';

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
            if (e.key === text[textFromKeyboard.length]) {
                setError(false);
                setTextFromKeyboard((prev) => [...prev, e.key]);
            } else {
                setError(true);
            }
        };

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [textFromKeyboard, text]);

    return (
        <span>
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
