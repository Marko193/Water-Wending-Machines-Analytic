import {
  GET_USERS_REQUEST_SUCCESS,
  GET_USER_REQUEST_SUCCESS
} from "./actionTypes"
import { post, get } from "../../helpers/api_helper";
import { userRefreshToken } from "../auth/login/actions";



export const getAffiliatesUsers = () => async (dispatch, getState) => {
  await dispatch(userRefreshToken())
  const { Login: { accessToken, refreshToken, remember }, Affiliates: { branchId } } = getState();
  try {
    if (accessToken) {
      console.log(accessToken);
      console.log('BRANCHID', branchId);
      const { data } = await get(`https://testdms.ml/api/dms/users/?branchId=${branchId}&offset=0&limit=10000`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      console.log(data);
      if (data) {
        if (remember) {
          localStorage.setItem('users', JSON.stringify(data));
          await dispatch({ type: GET_USERS_REQUEST_SUCCESS, payload: data });
        } else {
          sessionStorage.setItem('users', JSON.stringify(data));
          await dispatch({ type: GET_USERS_REQUEST_SUCCESS, payload: data });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export const getAffiliatesUser = (id) => async (dispatch, getState) => {
  await dispatch(userRefreshToken())
  const { Login: { accessToken, refreshToken, remember }, } = getState();
  try {
    if (accessToken) {
      const { data } = await get(`https://testdms.ml/api/dms/users/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      console.log(data);
      if (data) {
        if (remember) {
          localStorage.setItem('editUser', JSON.stringify(data));
          await dispatch({ type: GET_USER_REQUEST_SUCCESS, payload: data });
        } else {
          sessionStorage.setItem('editUser', JSON.stringify(data));
          await dispatch({ type: GET_USER_REQUEST_SUCCESS, payload: data });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}
