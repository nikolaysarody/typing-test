import axios from 'axios';
import { BACONIPSUM_API_URL } from '../../config';

export const apiInstance = axios.create({
    baseURL: BACONIPSUM_API_URL,
});
