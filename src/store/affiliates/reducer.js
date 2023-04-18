import {
  AFFILIATES_REQUEST_SUCCESS,
  AFFILIATE_BRANCHID_SUCCESS,
  AFFILIATES_DATA_REQUEST_SUCCESS
} from "./actionTypes"

// new branch
const initialState = {
  error: "",
  loading: false,
  affiliates: localStorage.getItem('affiliates') ? JSON.parse(localStorage.getItem('affiliates')) : sessionStorage.getItem('affiliates') ? JSON.parse(sessionStorage.getItem('affiliates')) : null,
  affiliatesData: localStorage.getItem('affiliatesData') ? JSON.parse(localStorage.getItem('affiliatesData')) : sessionStorage.getItem('affiliatesData') ? JSON.parse(sessionStorage.getItem('affiliatesData')) : null,
  branchId: localStorage.getItem('branchId') ? JSON.parse(localStorage.getItem('branchId')) : sessionStorage.getItem('branchId') ? JSON.parse(sessionStorage.getItem('branchId')) : 1
}

const affiliate = (state = initialState, action) => {
  switch (action.type) {
    case AFFILIATES_REQUEST_SUCCESS:
      state = {
        ...state,
        affiliates: action.payload
      }
      break
    case AFFILIATES_DATA_REQUEST_SUCCESS:
      state = {
        ...state,
        affiliatesData: action.payload
      }
      break
    case AFFILIATE_BRANCHID_SUCCESS:
      state = {
        ...state,
        branchId: action.payload
      }
      break
    default:
      state = { ...state }
      break
  }
  return state
}

export default affiliate
