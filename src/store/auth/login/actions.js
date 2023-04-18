import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  API_ERROR,
  SOCIAL_LOGIN,
  USER_LOGIN_REQUEST,
  USER_LOGIN_REMEMBER_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_MEMORY_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REFRESH_TOKEN_SUCCESS
} from "./actionTypes"
import { post } from "../../../helpers/api_helper";

export const userLogin = (login, password, history, remember) => async dispatch => {
  // console.log(login);
  // console.log(password);
  console.log(history);
  try {
    await dispatch({ type: USER_LOGIN_REQUEST });
    const userData = await post('https://testdms.ml/api/identity/login', { login, password }, {
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      }
    });
    console.log(userData);
    if (userData) {
      if (remember) {
        // console.log('REMEMBER', remember);
        localStorage.setItem('user', JSON.stringify(userData))
        await dispatch({ type: USER_LOGIN_SUCCESS, payload: userData, remember });
      } else {
        // console.log('REMEMBER', remember);
        sessionStorage.setItem('user', JSON.stringify(userData))
        await dispatch({ type: USER_LOGIN_SUCCESS, payload: userData, remember });
      }
      history.push('/dashboard')
    }
  } catch (e) {
    console.log(e);
  }
}

export const userRefreshToken = () => async (dispatch, getState) => {
  const { Login: { accessToken, refreshToken }, } = getState();
  try {
    const userData = await post('https://testdms.ml/api/identity/refresh-token', { refreshToken }, { headers: { Authorization: `Bearer ${accessToken}` } });
    console.log('REFRESH', userData);
    if (userData) {
      await dispatch({ type: USER_REFRESH_TOKEN_SUCCESS, payload: userData });
    } else {
      console.log(111);
      // await dispatch(userLogout())
      // userLogout()
    }
  } catch (error) {
    // await dispatch(userLogout())
    // userLogout()
    console.log(error);
  }
}

export const userLogout = history => async (dispatch, getState) => {
  const { Login: { remember } } = getState()
  if (remember) {
    localStorage.removeItem('user');
    localStorage.removeItem('branchId');
    localStorage.removeItem('users');
    localStorage.removeItem('affiliates');
    localStorage.removeItem('affiliatesData');
    await dispatch({ type: USER_LOGOUT_REQUEST, payload: null });
  } else {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('branchId');
    sessionStorage.removeItem('users');
    sessionStorage.removeItem('affiliates');
    sessionStorage.removeItem('affiliatesData');
    await dispatch({ type: USER_LOGOUT_REQUEST, payload: null });
  }
  if (history) {
    history.push('/login')
  }
}


export const loginUser = (user, history) => {
  return {
    type: LOGIN_USER,
    payload: { user, history },
  }
}

export const loginSuccess = user => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  }
}

export const logoutUser = history => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  }
}

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  }
}

export const apiError = error => {
  return {
    type: API_ERROR,
    payload: error,
  }
}

export const socialLogin = (data, history, type) => {
  return {
    type: SOCIAL_LOGIN,
    payload: { data, history, type },
  }
}
