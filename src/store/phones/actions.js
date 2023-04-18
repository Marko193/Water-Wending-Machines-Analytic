import {
    GET_PHONES_LIST_REQUEST_SUCCESS,
    GET_PHONES_LIST_BY_DEVICE_REQUEST_SUCCESS,
    CREATE_PHONE_REQUEST_SUCCESS,
    UPDATE_PHONE_REQUEST_SUCCESS,
    DELETE_PHONE_REQUEST_SUCCESS
} from "./actionsTypes"

import {del, get, post, put} from "../../helpers/api_helper";

// GET Actions

export const getPhoneList = () => async (dispatch, getState) => {
    const { Login: { accessToken, refreshToken, remember }, Affiliates: { branchId } } = getState();
    try {
        if (accessToken) {
            const  {data}  = await get(`https://testdms.ml/api/dms/settings/phone/list?branchId=${branchId}&offset=0&limit=10000`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })

            await dispatch({ type: GET_PHONES_LIST_REQUEST_SUCCESS, payload: data });

        }
    } catch (error) {
        console.error(error);
    }
}

export const getPhoneByDeviceId = (id) => async (dispatch, getState) => {
    const { Login: { accessToken }, Affiliates: { branchId }} = getState();
    try {
        if (accessToken) {
            const {data}  = await get(`https://testdms.ml/api/dms/settings/phone/list/by-device?deviceId=${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            await dispatch({ type: GET_PHONES_LIST_BY_DEVICE_REQUEST_SUCCESS, payload: data[0] });
        }
    } catch (error) {
        console.error(error);
    }
}

// PUT Actions
export const updatePhone = (id, body) => async (dispatch, getState) => {
    const { Login: { accessToken }, Affiliates: { branchId } } = getState();
    try {
        if (accessToken) {
            const  {data} =
                await put(`https://testdms.ml/api/dms/settings/phone`, body, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
            await dispatch({ type: UPDATE_PHONE_REQUEST_SUCCESS, payload: body });
        }
    } catch (error) {
        console.error(error);
    }
}


// POST Actions

export const createPhone = ( body) => async (dispatch, getState) => {
    const { Login: { accessToken }, Affiliates: { branchId } } = getState();
    try {
        if (accessToken) {
            const  {data} =
                await post(`https://testdms.ml/api/dms/settings/phone`, body, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
            await dispatch({ type: CREATE_PHONE_REQUEST_SUCCESS, payload: body });
        }
    } catch (error) {
        console.error("action (backend) file error text", error);
    }
}

// DELETE Action

export const deletePhone = (id) => async (dispatch, getState) => {
    const { Login: { accessToken }, Affiliates: { branchId } } = getState();
    try {
        if (accessToken) {
            const  { data }  = await del(`https://testdms.ml/api/dms/settings/phone?id=${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            await dispatch({ type: DELETE_PHONE_REQUEST_SUCCESS, payload: id });

        }
    } catch (error) {
        console.error(error);
    }
}