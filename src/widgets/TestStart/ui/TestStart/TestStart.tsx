import React from 'react';
import { Row } from 'react-bootstrap';
import { SetOptions } from '../../../../features/test/setOptions';
import { StartTest } from '../../../../features/test/startTest';

export function TestStart() {
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <Row className="window bg-white d-flex align-items-stretch p-4">
                <SetOptions />
                <div className="d-flex justify-content-end p-5">
                    <span className="fs-4 text-center">
                        Добро пожаловать на тренажер слепой печати. Выберите раскладку и нажмите кнопку
                        &quot;Начать&quot;.
                    </span>
                </div>
                <StartTest />
            </Row>
        </div>
    );
}
