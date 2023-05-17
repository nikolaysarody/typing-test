import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { TestErrors, TestSpeed, TestText } from '../../../../entities/test';
import './TypingTest.scss';

export function TypingTest() {
    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <Row className="window bg-white d-flex align-items-center fs-4 p-4">
                <Col sm={10}>
                    <TestText />
                </Col>
                <Col>
                    <TestSpeed />
                    <TestErrors />
                </Col>
            </Row>
        </div>
    );
}
