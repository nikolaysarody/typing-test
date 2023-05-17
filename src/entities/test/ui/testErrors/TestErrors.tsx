import React from 'react';
import { useAppSelector } from '../../../../shared/hooks';

export function TestErrors() {
    const isGameStarted = useAppSelector((state) => state.test.isGameStarted);
    const wrongWord = useAppSelector((state) => state.test.wrongWord);
    const textLength = useAppSelector((state) => state.test.text).length;

    const accuracy = () => {
        if (!isGameStarted) {
            return 100;
        }
        console.log(textLength);
        console.log(wrongWord);
        return (100 - (wrongWord / textLength) * 100).toFixed(1);
    };

    return (
        <div className="d-flex flex-column align-items-start">
            <div className="text-secondary d-flex align-items-center justify-content-center">
                <img src="/images/free-icon-target-2520659.png" alt="Speed" height="24" />
                <span className="fs-6 ps-2">Точность</span>
            </div>
            <div className="text-primary d-flex justify-content-center align-items-end">
                <span className="fs-3">{accuracy()}</span>
                <span className="fs-6 ps-1">%</span>
            </div>
        </div>
    );
}
