import React, { useEffect } from 'react';
import { v4 } from 'uuid';
import { Spinner } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import './TestText.scss';
import {
    addTextFromKeyboard,
    fetchText,
    gameStatus,
    incCorrectWord,
    incWrongWord,
    setCurrentIndex,
    setTextError,
} from '../../model';

export function TestText() {
    const dispatch = useAppDispatch();
    const text = useAppSelector((state) => state.test.text).split('');
    const currentIndex = useAppSelector((state) => state.test.currentIndex);
    const error = useAppSelector((state) => state.test.textError);
    const textFromKeyboard = useAppSelector((state) => state.test.textFromKeyboard);
    const isLoading = useAppSelector((state) => state.test.loading);
    const isLoadingError = useAppSelector((state) => state.test.error);

    useEffect(() => {
        dispatch(fetchText());
    }, [dispatch]);

    useEffect(() => {
        const onKeypress = (e: KeyboardEvent) => {
            dispatch(gameStatus(true));
            if (e.key === text[textFromKeyboard.length]) {
                dispatch(incCorrectWord());
                dispatch(setTextError(false));
                dispatch(addTextFromKeyboard(e.key));
                dispatch(setCurrentIndex(textFromKeyboard.length + 1));
            } else {
                if (!error) {
                    dispatch(incWrongWord());
                }
                dispatch(setTextError(true));
            }
        };

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [dispatch, textFromKeyboard, text, error]);

    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center h-100">
                <Spinner animation="border" />
            </div>
        );
    }

    if (isLoadingError) {
        return (
            <div className="d-flex align-items-center justify-content-center h-100">
                <span className="text-danger">{isLoadingError}</span>
            </div>
        );
    }

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
                if (index === currentIndex) {
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
