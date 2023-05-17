import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import { incTime } from '../../model';

export function TestSpeed() {
    const dispatch = useAppDispatch();
    const isGameStarted = useAppSelector((state) => state.test.isGameStarted);
    const gameTime = useAppSelector((state) => state.test.time);
    const correctWord = useAppSelector((state) => state.test.correctWord);
    const isGameFinished = useAppSelector((state) => state.test.isGameFinished);

    const CPM = () => {
        if (!isGameStarted) {
            return 0;
        }
        return Math.round((correctWord / (gameTime || 1)) * 60);
    };

    useEffect(() => {
        let timerId: NodeJS.Timer;
        if (isGameStarted) {
            timerId = setInterval(() => {
                dispatch(incTime());
            }, 1000);
            if (isGameFinished) {
                clearInterval(timerId);
            }
        }
        return () => {
            clearInterval(timerId);
        };
    }, [dispatch, isGameStarted, isGameFinished]);

    return (
        <div className="d-flex flex-column align-items-start">
            <div className="text-secondary d-flex align-items-center justify-content-center">
                <img src="/images/free-icon-speedometer-2787169.png" alt="Speed" height="24" />
                <span className="fs-6 ps-2">Скорость</span>
            </div>
            <div className="text-primary d-flex justify-content-center align-items-end">
                <span className="fs-3">{CPM()}</span>
                <span className="fs-6 ps-1">зн./мин</span>
            </div>
        </div>
    );
}
