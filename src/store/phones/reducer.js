import {
    GET_PHONES_LIST_REQUEST_SUCCESS,
    GET_PHONES_LIST_BY_DEVICE_REQUEST_SUCCESS,
    CREATE_PHONE_REQUEST_SUCCESS,
    UPDATE_PHONE_REQUEST_SUCCESS,
    DELETE_PHONE_REQUEST_SUCCESS
} from './actionsTypes'

const initialState = {
    phones: [],
    currentPhone: {},
    deviceId: "1"
}

const Phone = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHONES_LIST_REQUEST_SUCCESS:
            state = {
                ...state,
                phones: action.payload
            }
            break

        case GET_PHONES_LIST_BY_DEVICE_REQUEST_SUCCESS:
            state = {
                ...state,
                currentPhone: action.payload
            }
            break

                case CREATE_PHONE_REQUEST_SUCCESS:
                    state = {
                        ...state,
                        phones: [...state.phones ,action.payload]
                    }
                    break

        case UPDATE_PHONE_REQUEST_SUCCESS:
            const updatePhone = state.phones.map(phone =>
                phone.id === action.payload.id
                    ? { ...phone, ...action.payload}
                    : phone)
            state = {
                ...state,
                phones: updatePhone
            }
            break

        case DELETE_PHONE_REQUEST_SUCCESS:
            const deletePhone = state.phones.filter(item => item.id !== action.payload)
            state = {
                ...state,
                phones: deletePhone
            }
            break

        default:
            state = {...state}
            break
    }
    return state
}

export default Phone;