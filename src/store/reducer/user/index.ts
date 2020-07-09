import {
    Action
} from 'redux';

import {
    InitState
} from './types';

interface Data {
    data: any
};

const initState: InitState = {
    userInfo: null
};

import * as Const from './../../const/user';

export default (
    state = initState,
    action: Action & Data
) => {
    const {
        type,
        data
    } = action;

    switch (type) {
        case Const.login: {
            return {
                ...state,
                userInfo: data
            }
        }

        case Const.loginOut:{
            return {
                ...state,
                userInfo: null
            }
        }
    }

    return state;
}