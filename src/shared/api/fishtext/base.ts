import axios from 'axios';
import { FISHTEXT_API_URL } from '../../config';

export const apiInstance = axios.create({
    baseURL: FISHTEXT_API_URL,
});
