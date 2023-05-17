import { apiInstance } from './base';
import type { AxiosPromise } from 'axios';
import type { BaconipsumText, Type, Format } from './models';

const BASE_URL = '/api/';

export type BaconTextParams = {
    type: Type;
    paras?: number;
    sentences?: number;
    'start-with-lorem'?: number;
    format?: Format;
};

export const getText = (params?: BaconTextParams): AxiosPromise<BaconipsumText> => {
    return apiInstance.get(BASE_URL, { params });
};
