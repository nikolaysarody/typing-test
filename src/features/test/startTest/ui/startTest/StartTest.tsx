import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../../../../shared/hooks';
import { startGame } from '../../../../../entities/test/model';

export function StartTest() {
    const dispatch = useAppDispatch();

    return (
        <div className="d-flex justify-content-center">
            <Button
                variant="outline-primary"
                size="lg"
                onClick={() => {
                    dispatch(startGame());
                }}
            >
                Начать
            </Button>
        </div>
    );
}
