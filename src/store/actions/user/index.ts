import {
    Dispatch
} from 'redux';

import Actions, {
    loginPara
} from './types';

export default Actions;

import Service from './../../../service';

import * as Const from './../../const/user';

//用户登录
export const login = (para: loginPara) => (
    async (dispatch: Dispatch) => {
        try {
            const user = await Service.post(
                `/login`, para
            );
            dispatch({
                data: user,
                type: Const.login
            })
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
)

//用户退出登录
export const loginOut = () => {
    return {
        type:Const.loginOut
    }
}