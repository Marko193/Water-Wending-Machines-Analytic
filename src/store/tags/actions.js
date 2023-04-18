import {
    GET_TAGS_REQUEST_SUCCESS,
    GET_TAG_BY_ID_REQUEST_SUCCESS,
    GET_DEVICES_BY_ID_REQUEST_SUCCESS,
    GET_ALL_DEVICES_REQUEST_SUCCESS,

    UPDATE_TAG_BY_ID_REQUEST_SUCCESS,

    CREATE_TAG_REQUEST_SUCCESS,

    DELETE_TAG_BY_ID_REQUEST_SUCCESS
    } from "./actionTypes"

import { get, put, del, post } from "../../helpers/api_helper";

// GET Actions
export const getTags = () => async (dispatch, getState) => {
    const { Login: { accessToken, refreshToken, remember }, Affiliates: { branchId } } = getState();
    try {
        if (accessToken) {
            const  {data}  = await get(`https://testdms.ml/api/dms/tags/list/?branchId=${branchId}&offset=0&limit=10000`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
console.log(`data`, data)
            await dispatch({ type: GET_TAGS_REQUEST_SUCCESS, payload: data });

        }
    } catch (error) {
        console.error(error);
    }
}

export const getTagById = (id) => async (dispatch, getState) => {
    const { Login: { accessToken, remember }, Affiliates: { branchId }} = getState();
    try {
        if (accessToken) {
            const data  = await get(`https://testdms.ml/api/dms/tags/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            await dispatch({ type: GET_TAG_BY_ID_REQUEST_SUCCESS, payload: data });
        }
    } catch (error) {
        console.error(error);
    }
}

export const getDevicesById = (id) => async (dispatch, getState) => {
    const { Login: { accessToken, remember }, Affiliates: { branchId }} = getState();
    try {
        if (accessToken) {
            const {data}  = await get(`https://testdms.ml/api/dms/tags/${id}/devices?offset=0&limit=10000`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            await dispatch({ type: GET_DEVICES_BY_ID_REQUEST_SUCCESS, payload: data });
        }
    } catch (error) {
        console.error(error);
    }
}

export const getAllDevices = () => async (dispatch, getState) => {
    const { Login: { accessToken }, Affiliates: { branchId }} = getState();
    try {
        if (accessToken) {
            const data  = await get(`https://testdms.ml/api/dms/tags/devices?tags=10&offset=0&limit=10000`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            await dispatch({ type: GET_ALL_DEVICES_REQUEST_SUCCESS, payload: data });
        }
    } catch (error) {
        console.error(error);
    }
}

// PUT Actions
export const putTag = (id, body) => async (dispatch, getState) => {
    const { Login: { accessToken }, Affiliates: { branchId } } = getState();
    try {
        if (accessToken) {
            const  {data} =
            await put(`https://testdms.ml/api/dms/tags`, body, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            await dispatch({ type: UPDATE_TAG_BY_ID_REQUEST_SUCCESS, payload: body });
        }
    } catch (error) {
        console.error(error);
    }
}

//POST Action
export const addTag = ( body) => async (dispatch, getState) => {
    const { Login: { accessToken }, Affiliates: { branchId } } = getState();
    try {
        if (accessToken) {
            const  {data} =
                await post(`https://testdms.ml/api/dms/tags`, body, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
            await dispatch({ type: CREATE_TAG_REQUEST_SUCCESS, payload: body });
        }
    } catch (error) {
        console.error("action (backend) file error text", error);
    }
}

//DELETE Action
export const deleteTagByID = (id) => async (dispatch, getState) => {
    const { Login: { accessToken }, Affiliates: { branchId } } = getState();
    try {
        if (accessToken) {
            const  { data }  = await del(`https://testdms.ml/api/dms/tags/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            await dispatch({ type: DELETE_TAG_BY_ID_REQUEST_SUCCESS, payload: id });

        }
    } catch (error) {
        console.error(error);
    }
}