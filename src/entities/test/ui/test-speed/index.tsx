import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../shared/hooks';

export function TestSpeed() {
    const isGameStarted = useAppSelector((state) => state.test.isGameStarted);
    const [time, setTime] = useState<number>(0);
    // const wrongWord = useAppSelector((state) => state.test.wrongWord);
    const correctWord = useAppSelector((state) => state.test.correctWord);

    const CPM = () => {
        if (!isGameStarted) {
            return 0;
        }
        return Math.round((correctWord / (time || 1)) * 60);
    };

    useEffect(() => {
        let timerId: NodeJS.Timer;
        if (isGameStarted) {
            timerId = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [isGameStarted]);

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
