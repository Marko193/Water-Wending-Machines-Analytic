import {
    GET_TAGS_REQUEST_SUCCESS,
    GET_TAG_BY_ID_REQUEST_SUCCESS,
    GET_DEVICES_BY_ID_REQUEST_SUCCESS,
    GET_ALL_DEVICES_REQUEST_SUCCESS,

    UPDATE_TAG_BY_ID_REQUEST_SUCCESS,
    CREATE_TAG_REQUEST_SUCCESS,
    DELETE_TAG_BY_ID_REQUEST_SUCCESS

} from "./actionTypes"

const initialState = {
    error: "",
    loading: false,
    tags: [],
    currentTag: {},
    devices: [],
    allDevices: []
}



const Tag = (state = initialState, action) => {
    switch (action.type) {
        case GET_TAGS_REQUEST_SUCCESS:
            state = {
                ...state,
                tags: action.payload
            }
            break
        case GET_TAG_BY_ID_REQUEST_SUCCESS:
            state = {
                ...state,
                currentTag: action.payload
            }
            break
        case GET_DEVICES_BY_ID_REQUEST_SUCCESS:
            state = {
                ...state,
                devices: action.payload
            }
            break
        case GET_ALL_DEVICES_REQUEST_SUCCESS:
            state = {
                ...state,
                allDevices: action.payload
            }
            break

        case UPDATE_TAG_BY_ID_REQUEST_SUCCESS:
            const updateTag = state.tags.map(tag =>
                tag.id === action.payload.id
                    ? { ...tag, ...action.payload}
                    : tag)
            state = {
                ...state,
                tags: updateTag

            }
            break

        case CREATE_TAG_REQUEST_SUCCESS:
            state = {
                ...state,
                tags: [...state.tags, action.payload]
            }
            break

        case DELETE_TAG_BY_ID_REQUEST_SUCCESS:
            const deleteTag = state.tags.filter(item => item.id !== action.payload)
            state = {
                ...state,
                tags: deleteTag
            }
            break

        default:
            state = {...state}
            break
    }
    return state
}

export default Tag;
