import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { TestErrors, TestSpeed } from '../../../../entities/test';
import { ResetTest } from '../../../../features/test/resetTest';

export function TestFinished() {
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <Row className="window bg-white d-flex align-items-stretch p-4">
                <div className="d-flex justify-content-center">
                    <span className="fs-4 text-center">Ваши результаты:</span>
                </div>
                <div className="d-flex justify-content-between pt-5 pb-5">
                    <Col className="d-flex justify-content-center">
                        <TestSpeed />
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <TestErrors />
                    </Col>
                </div>
                <ResetTest />
            </Row>
        </div>
    );
}
