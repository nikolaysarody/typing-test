import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TestErrors, TestSpeed } from '../../../../entities/test';
import './TypingTest.scss';
import { ResetTest } from '../../../../features/test/resetTest';
import { TestText } from '../../../../features/test/testText';

export function TypingTest() {
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <Row className="window bg-white d-flex align-items-stretch p-4">
                <Col sm={9}>
                    <TestText />
                </Col>
                <Col className="d-flex w-100 flex-column align-items-center justify-content-around">
                    <TestSpeed />
                    <TestErrors />
                    <ResetTest />
                </Col>
            </Row>
        </div>
    );
}
