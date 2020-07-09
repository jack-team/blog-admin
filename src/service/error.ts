import {
    AxiosError
} from 'axios';

interface Error {
    code: number,
    message: string,
    loginOut?: boolean
}

const err: Error = {
    code: 500,
    message: `server error.`
}

import * as Token from './token';

export default (res: AxiosError & Error) => {
    if (res.response) {
        return Promise.reject(err);
    }

    if (res.loginOut) {
        Token.clear();
    }

    return Promise.reject(res);
}