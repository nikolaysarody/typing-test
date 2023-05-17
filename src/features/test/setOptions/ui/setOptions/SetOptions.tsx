import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { TypingTestModes } from '../../../../../entities/test/model/types';
import { useAppDispatch, useAppSelector } from '../../../../../shared/hooks';
import { setMode } from '../../../../../entities/test/model';

export function SetOptions() {
    const dispatch = useAppDispatch();
    const gameMode = useAppSelector((state) => state.test.mode);

    return (
        <DropdownButton
            id="dropdown-basic-button"
            title={gameMode === TypingTestModes.eng ? 'Английская раскладка' : 'Русская раскладка'}
            variant="outline-primary"
            className="d-flex justify-content-end"
        >
            <Dropdown.Item onClick={() => dispatch(setMode(TypingTestModes.eng))}>Английская раскладка</Dropdown.Item>
            <Dropdown.Item onClick={() => dispatch(setMode(TypingTestModes.rus))}>Русская раскладка</Dropdown.Item>
        </DropdownButton>
    );
}
