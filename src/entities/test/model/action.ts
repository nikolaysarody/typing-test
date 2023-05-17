import { isAxiosError } from 'axios';
import { AppDispatch } from '../../../app/store';
import { baconApi, fishApi } from '../../../shared/api/index';
import { baconTypes } from '../../../shared/api/baconipsum';
import { fishTypes } from '../../../shared/api/fishtext';
import { fetchError, fetching, fetchSuccess } from './slice';
import { TypingTestModes } from './types';

export const fetchText = (mode: TypingTestModes) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetching());
            let res;
            if (mode === TypingTestModes.eng) {
                res = await baconApi.texts.getText({
                    type: baconTypes.Type.allMeat,
                    paras: 1,
                    format: baconTypes.Format.json,
                });
                dispatch(fetchSuccess(res.data.join('')));
            } else {
                res = await fishApi.texts.getText({
                    type: fishTypes.Type.sentence,
                    number: 3,
                    format: fishTypes.Format.json,
                });
                dispatch(fetchSuccess(res.data.text));
            }
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchError(e.response.data.message));
            }
        }
    };
};
