import { instance } from "../adapters/request/axios";

export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR'
}

export const changeValue = (payload: any) =>({
    type: actionTypes.CHANGE,
    payload
})

export const registerError = (payload: any) =>({
    type: actionTypes.ERROR,
    payload
})

export const success = (payload: any) =>({
    type: actionTypes.SUCCESS,
    payload
})

export const registerCollaborator = async (data: any) =>{
    const res = await instance.get('/index', data);
    return res;
}


