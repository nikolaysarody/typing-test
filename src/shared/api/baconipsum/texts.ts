import { apiInstance } from './base';
import type { AxiosPromise } from 'axios';
import type { BaconText, Type, Format } from './models';

const BASE_URL = '/api/';

export type GetTextParams = {
    type: Type;
    paras?: number;
    sentences?: number;
    'start-with-lorem'?: number;
    format?: Format;
};

export const getText = (params?: GetTextParams): AxiosPromise<BaconText> => {
    return apiInstance.get(BASE_URL, { params });
};
