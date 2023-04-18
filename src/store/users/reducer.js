import {
  GET_USERS_REQUEST_SUCCESS,
  GET_USER_REQUEST_SUCCESS
} from "./actionTypes"

const initialState = {
  error: "",
  loading: false,
  users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : sessionStorage.getItem('users') ? JSON.parse(sessionStorage.getItem('users')) : null,
  user: localStorage.getItem('editUser') ? JSON.parse(localStorage.getItem('editUser')) : sessionStorage.getItem('editUser') ? JSON.parse(sessionStorage.getItem('editUser')) : null

}

const Users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST_SUCCESS:
      state = {
        ...state,
        users: action.payload
      }
      break
    case GET_USER_REQUEST_SUCCESS:
      state = {
        ...state,
        user: action.payload
      }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default Users
