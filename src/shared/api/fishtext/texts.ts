import { apiInstance } from './base';
import type { AxiosPromise } from 'axios';
import type { FishText, Type, Format } from './models';

const BASE_URL = '/get';

export type GetTextParams = {
    type: Type;
    number?: number;
    format: Format;
};

export const getText = (params?: GetTextParams): AxiosPromise<FishText> => {
    return apiInstance.get(BASE_URL, { params });
};
