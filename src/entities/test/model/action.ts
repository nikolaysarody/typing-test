import { isAxiosError } from 'axios';
import { AppDispatch } from '../../../app/store';
import { baconApi } from '../../../shared/api/index';
import { Format, Type } from '../../../shared/api/baconipsum/models';
import { fetchError, fetching, fetchSuccess } from './slice';

export const fetchText = () => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(fetching());
            const res = await baconApi.texts.getText({ type: Type.allMeat, paras: 1, format: Format.json });
            dispatch(fetchSuccess(res.data.join('')));
        } catch (e) {
            if (isAxiosError(e) && e.response != null) {
                dispatch(fetchError(e.response.data.message));
            }
        }
    };
};
