import React from 'react';
import { TypingTest } from '../../../../widgets/TypingTest';
import { useAppSelector } from '../../../../shared/hooks';
import { TestStart } from '../../../../widgets/TestStart';

export function TypingTestPage() {
    const isOptionsInstalled = useAppSelector((state) => state.test.isOptionsInstalled);

    if (isOptionsInstalled) {
        return <TypingTest />;
    }
    return <TestStart />;
}
