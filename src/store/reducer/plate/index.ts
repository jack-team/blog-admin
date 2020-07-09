import {
    InitState
} from './types';

import {
    Action
} from 'redux';

const initState: InitState = {
    list:[]
}

import * as types from './../../const/plate';

export default (
    state = initState,
    action:Action | any
) => {
    const {
        type,
        data
    } = action;

    switch (type) {
        case types.getList: {
            return {
                ...state,
                list: data
            }
        }
        case types.addPlate: {
            const {
                list = []
            } = state;

            list.unshift(data);

            return {
                ...state,
                list: [...list]
            }
        }
    }

    return state;
}