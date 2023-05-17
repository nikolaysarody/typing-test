import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch } from '../../../../../shared/hooks';
import { fetchText, clearGame } from '../../../../../entities/test/model';

export function ResetTest() {
    const dispatch = useAppDispatch();

    const resetGame = () => {
        dispatch(fetchText());
        dispatch(clearGame());
    };

    return (
        <Button variant="outline-primary" onClick={() => resetGame()}>
            Заново
        </Button>
    );
}
