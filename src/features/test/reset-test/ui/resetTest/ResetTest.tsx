import React from 'react';
import { Button } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks';
import { fetchText, clearGame } from '../../../../../entities/test/model';

export function ResetTest() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector((state) => state.test.loading);

    const resetGame = () => {
        dispatch(fetchText());
        dispatch(clearGame());
    };

    return (
        <Button variant="outline-primary" disabled={isLoading} onClick={() => resetGame()}>
            {isLoading ? 'Загрузка...' : 'Заново'}
        </Button>
    );
}
