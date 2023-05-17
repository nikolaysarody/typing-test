import React from 'react';
import { TypingTest } from '../../../../widgets/TypingTest';
import { useAppSelector } from '../../../../shared/hooks';
import { TestStart } from '../../../../widgets/TestStart';
import { TestFinished } from '../../../../widgets/TestFinished';

export function TypingTestPage() {
    const isOptionsInstalled = useAppSelector((state) => state.test.isOptionsInstalled);
    const isGameFinished = useAppSelector((state) => state.test.isGameFinished);

    if (isGameFinished) {
        return <TestFinished />;
    }
    if (isOptionsInstalled) {
        return <TypingTest />;
    }
    return <TestStart />;
}
