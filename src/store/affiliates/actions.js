import {
  AFFILIATES_REQUEST_SUCCESS,
  AFFILIATE_BRANCHID_SUCCESS,
  AFFILIATES_DATA_REQUEST_SUCCESS
} from "./actionTypes"
import { post, get } from "../../helpers/api_helper";
import { userRefreshToken } from "../auth/login/actions";


export const getAffliliates = () => async (dispatch, getState) => {
  // await dispatch(userRefreshToken())
  const { Login: { accessToken, refreshToken, remember }, } = getState();
  try {
    if (accessToken) {
      // console.log(accessToken);
      const { data } = await get('https://testdms.ml/api/dms/branches/list', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      // console.log("all affiliates data")
      // console.log(data);
      if (data) {
        if (remember) {
          localStorage.setItem('affiliates', JSON.stringify(data));
          await dispatch({ type: AFFILIATES_REQUEST_SUCCESS, payload: data });
        } else {
          sessionStorage.setItem('affiliates', JSON.stringify(data));
          await dispatch({ type: AFFILIATES_REQUEST_SUCCESS, payload: data });
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export const getAffliliatesData = () => async (dispatch, getState) => {
  // await dispatch(userRefreshToken())
  const { Login: { accessToken, refreshToken, remember, userData: { roleId, branchId } } } = getState();
  console.log('ROLEID', roleId);
  try {
    if (accessToken) {
      if (roleId === 2) {
        console.log(3242342);
        console.log(branchId);
        const { data } = await get(`https://testdms.ml/api/dms/branches/${branchId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        console.log(data);
        if (data) {
          if (remember) {
            localStorage.setItem('affiliatesData', JSON.stringify(data));
            await dispatch({ type: AFFILIATES_DATA_REQUEST_SUCCESS, payload: data });
          } else {
            sessionStorage.setItem('affiliatesData', JSON.stringify(data));
            await dispatch({ type: AFFILIATES_DATA_REQUEST_SUCCESS, payload: data });
          }
        }
      } else {
        const { data } = await get('https://testdms.ml/api/dms/branches?offset=0&limit=1000', {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        })
        console.log(data);
        if (data) {
          if (remember) {
            localStorage.setItem('affiliatesData', JSON.stringify(data));
            await dispatch({ type: AFFILIATES_DATA_REQUEST_SUCCESS, payload: data });
          } else {
            sessionStorage.setItem('affiliatesData', JSON.stringify(data));
            await dispatch({ type: AFFILIATES_DATA_REQUEST_SUCCESS, payload: data });
          }
        }
      }

    }
  } catch (error) {
    console.log(error);
  }
}

export const setBranchId = (id) => async (dispatch, getState) => {
  // await dispatch(userRefreshToken())
  const { Login: { accessToken, remember }, } = getState();
  try {
    if (accessToken) {
      if (remember) {
        localStorage.setItem('branchId', id);
        await dispatch({ type: AFFILIATE_BRANCHID_SUCCESS, payload: id });
      } else {
        sessionStorage.setItem('branchId', id);
        await dispatch({ type: AFFILIATE_BRANCHID_SUCCESS, payload: id });
      }
    }
  } catch (error) {
    console.log(error);
  }
}


