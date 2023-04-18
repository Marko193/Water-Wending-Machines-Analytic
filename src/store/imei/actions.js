import {
  GET_IMEIS_REQUEST_SUCCESS,
  GET_IMEI_REQUEST_SUCCESS
} from "./actionTypes"
import { post, get } from "../../helpers/api_helper";

export const getIMEIs = () => async (dispatch, getState) => {
  const { Login: { accessToken,  remember }, Affiliates: { branchId } } = getState();
  try {
    if (accessToken) {
      console.log(accessToken);
      console.log('BRANCHID', branchId);
      const { data } = await get(`https://testdms.ml/api/dms/settings/imei/list/?branchId=${branchId}&offset=0&limit=10000`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      // console.log("all imei data from action (backend) file")
      // console.log(data);

      if (data) {
        if (remember) {
          localStorage.setItem('imeis', JSON.stringify(data));
          await dispatch({ type: GET_IMEIS_REQUEST_SUCCESS, payload: data });
        } else {
          sessionStorage.setItem('imeis', JSON.stringify(data));
          await dispatch({ type: GET_IMEIS_REQUEST_SUCCESS, payload: data });
        }
      }
    }
  } catch (error) {
    console.log("action (backend) file error text");
    console.log(error);
  }
}

//get info about specific imei
/// ???
export const getIMEI = (id) => async (dispatch, getState) => {
  const { Login: { accessToken, refreshToken, remember }, } = getState();
  try {
    if (accessToken) {
      const { data } = await get(`https://testdms.ml/api/dms/settings/imei/list/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      console.log(data);
      if (data) {
        if (remember) {
          localStorage.setItem('editUser', JSON.stringify(data));
          await dispatch({ type: GET_IMEI_REQUEST_SUCCESS, payload: data });
        } else {
          sessionStorage.setItem('editUser', JSON.stringify(data));
          await dispatch({ type: GET_IMEI_REQUEST_SUCCESS, payload: data });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}


