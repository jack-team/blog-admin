import {
    Dispatch
} from 'redux';

import Actions from './types';

import service from './../../../service';

import * as types from './../../const/plate';

export default Actions;

/*获取板块列表*/
export const getList = () => (
    async (dispatch:Dispatch) => {
        try {
            const list = await (
                service.get(
                    `/plate/list`
                )
            )
            dispatch({
                data: list,
                type: types.getList
            })
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
)

/*添加板块*/
export const addPlate = (para:any) => (
    async (dispatch:Dispatch) => {
        try {
            const res = await service.post(
                `/plate/add`, para
            )
            dispatch({
                data:res,
                type: types.addPlate
            })
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
)