import {
    GET_IMEIS_REQUEST_SUCCESS,
    GET_IMEI_REQUEST_SUCCESS
} from "./actionTypes"

const initialState = {
    error: "",
    loading: false,
    imeis: localStorage.getItem('imeis') ? JSON.parse(localStorage.getItem('imeis')) : sessionStorage.getItem('imeis') ? JSON.parse(sessionStorage.getItem('imeis')) : null,
    imei: localStorage.getItem('editImei') ? JSON.parse(localStorage.getItem('editImei')) : sessionStorage.getItem('editImei') ? JSON.parse(sessionStorage.getItem('editImei')) : null
}

const Imei = (state = initialState, action) => {
    switch (action.type) {
        case GET_IMEIS_REQUEST_SUCCESS:
            state = {
                ...state,
                imeis: action.payload
            }
            break
        case GET_IMEI_REQUEST_SUCCESS:
            state = {
                ...state,
                Imei: action.payload
            }
            break
        default:
            state = {...state}
            break
    }
    return state
}

export default Imei
