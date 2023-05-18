import React, { useEffect, useState } from 'react';
import { Spinner, Modal } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks';
import {
    addTextFromKeyboard,
    fetchText,
    finishGame,
    gameStatus,
    incCorrectWord,
    incWrongWord,
    setCurrentIndex,
    setTextError,
} from '../../../../../entities/test/model';
import { TypingTestModes } from '../../../../../entities/test/model/types';
import { TestWord } from '../../../../../entities/test';

export function TestText() {
    const dispatch = useAppDispatch();
    const text = useAppSelector((state) => state.test.text);
    const { currentIndex, textError, textFromKeyboard, isLoading, isLoadingError, gameMode } = useAppSelector(
        (state) => state.test
    );
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
                if (!textError) {
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
    }, [dispatch, textFromKeyboard, text, textError, gameMode]);

    if (isLoading) {
        return (
            <div className="d-flex align-items-center justify-content-center h-100">
                <Spinner animation="border" />
            </div>
        );
    }

    if (isLoadingError !== '') {
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
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Проверьте раскладку клавиатуры</Modal.Title>
                </Modal.Header>
            </Modal>
            <span className="fs-4">
                {text.map((item, index) => (
                    <TestWord
                        item={item}
                        index={index}
                        textFromKeyboard={textFromKeyboard[index]}
                        currentIndex={currentIndex}
                        key={`${item}_${index}`}
                    />
                ))}
            </span>
        </>
    );
}
