import {
    AxiosRequestConfig
} from 'axios';

import * as token from './token';

export default async (request: AxiosRequestConfig) => {
    const {
        headers
    } = request;

    const x_token = token.get();

    if (!!x_token) {
        headers[`authorization`] = `Bearer ${x_token}`;
    }

    return request;
}