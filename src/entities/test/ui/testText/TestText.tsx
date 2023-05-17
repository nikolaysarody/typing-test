import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { Spinner, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import './TestText.scss';
import {
    addTextFromKeyboard,
    fetchText,
    finishGame,
    gameStatus,
    incCorrectWord,
    incWrongWord,
    setCurrentIndex,
    setTextError,
} from '../../model';
import { TypingTestModes } from '../../model/types';

export function TestText() {
    const dispatch = useAppDispatch();
    const text = useAppSelector((state) => state.test.text)
        .split('')
        .map((item) => {
            if (item === 'ё') {
                return 'е';
            }
            if (item === '—') {
                return '-';
            }
            return item;
        });
    const currentIndex = useAppSelector((state) => state.test.currentIndex);
    const error = useAppSelector((state) => state.test.textError);
    const textFromKeyboard = useAppSelector((state) => state.test.textFromKeyboard);
    const isLoading = useAppSelector((state) => state.test.loading);
    const isLoadingError = useAppSelector((state) => state.test.error);
    const gameMode = useAppSelector((state) => state.test.mode);
    const [modalShow, setModalShow] = useState<boolean>(false);

    useEffect(() => {
        dispatch(fetchText(gameMode));
    }, [dispatch, gameMode]);

    useEffect(() => {
        const onKeypress = (e: KeyboardEvent) => {
            switch (gameMode) {
                case TypingTestModes.eng: {
                    if (e.key.match(/[a-z]|[0-9]|\s|\.|-|:|!|\?|,/i) === null) {
                        setModalShow(true);
                    }
                    break;
                }
                case TypingTestModes.rus: {
                    if (e.key.match(/[а-я]|[0-9]|\s|\.|-|:|!|\?|,/i) === null) {
                        setModalShow(true);
                    }
                    break;
                }
                default:
                    break;
            }
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
            if (textFromKeyboard.length + 1 === text.length) {
                dispatch(finishGame());
            }
        };

        document.addEventListener('keypress', onKeypress);

        return () => {
            document.removeEventListener('keypress', onKeypress);
        };
    }, [dispatch, textFromKeyboard, text, error, gameMode]);

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
        <>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="d-flex justify-content-center">
                    <Modal.Title id="contained-modal-title-vcenter">Проверьте раскладку клавиатуры</Modal.Title>
                </Modal.Header>
            </Modal>
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
        </>
    );
}
