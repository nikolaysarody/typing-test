import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../shared/hooks';
import { fetchText } from '../../model';

export function TestText() {
    const dispatch = useAppDispatch();
    const text = useAppSelector((state) => state.test.text);

    useEffect(() => {
        dispatch(fetchText());
    }, []);

    return <div>{text}</div>;
}
