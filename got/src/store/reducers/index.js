import { FETCHING_DATA_START, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../actions';

const initialState = {
    data: null,
    fetching: false,
    category: '',
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_DATA_START:
            return {
                ...state,
                fetching: true,
                error: '',

            };
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                fetching: false,
                data: action.payload.result,
                category: action.payload.category
            };
        case FETCHING_DATA_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        default:
            return state;
    }
}