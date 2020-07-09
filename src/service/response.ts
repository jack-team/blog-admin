import {
    AxiosResponse
} from 'axios';

interface Res {
    data:any;
    code:number;
    message:string
}

import * as token from './token';

export default async (
    response:AxiosResponse
) => {
    const {
        data,
        headers,
    } = response;

    const {
        code,
        data:_data
    } = data as Res;

    const x_token = (
        headers[`x-token`]
    );

    if(!!x_token) {
        token.set(x_token);
    }

    return code === 200 ?
        Promise.resolve(_data):
        Promise.reject(data);
}