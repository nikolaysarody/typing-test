import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../../../../shared/hooks';
import { clearGame } from '../../../../../entities/test/model';

export function ResetTest() {
    const dispatch = useAppDispatch();

    const resetGame = () => {
        dispatch(clearGame());
    };

    return (
        <div className="d-flex justify-content-center">
            <Button variant="outline-primary" onClick={() => resetGame()}>
                Заново
            </Button>
        </div>
    );
}
