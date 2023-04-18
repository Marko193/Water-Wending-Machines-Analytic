import {
  LOGIN_USER,
  USER_LOGIN_REQUEST,
  USER_LOGOUT_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REMEMBER_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  USER_LOGOUT_MEMORY_REQUEST,
  API_ERROR,
  USER_REFRESH_TOKEN_SUCCESS
} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  userData: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
  remember: false,
  // temporaryUserData: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null,
  accessToken: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).accessToken : sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).accessToken : '',
  refreshToken: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).refreshToken : sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')).refreshToken : ''

}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = {
        ...state,
        loading: true,
      }
      break
    case USER_LOGIN_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case USER_LOGOUT_REQUEST:
      state = {
        ...state,
        loading: false,
        userData: action.payload
      }
      break
    // case USER_LOGOUT_MEMORY_REQUEST:
    //   state = {
    //     ...state,
    //     loading: false,
    //     userData: action.payload,
    //   }
    //   break
    case USER_LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
        temporaryUserData: action.payload,
        remember: action.remember,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }
      break
    case USER_LOGIN_REMEMBER_SUCCESS:
      state = {
        ...state,
        loading: false,
        userData: action.payload,
        remember: action.remember,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }
      break
      // case USER_LOGIN_REMEMBER_SUCCESS:
      //   state = {
      //     ...state,
      //     loading: false,
      //     userData: action.payload,
      //     remember: action.remember,
      //     accessToken: action.payload.accessToken,
      //     refreshToken: action.payload.refreshToken
      //   }
      break
    case USER_REFRESH_TOKEN_SUCCESS:
      state = {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      }
      break
    case LOGIN_SUCCESS:
      state = {
        ...state,
        loading: false,
      }
      break
    case LOGOUT_USER:
      state = { ...state }
      break
    case LOGOUT_USER_SUCCESS:
      state = { ...state }
      break
    case API_ERROR:
      state = { ...state, error: action.payload, loading: false }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default login
