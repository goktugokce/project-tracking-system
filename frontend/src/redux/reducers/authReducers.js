import {
    REGISTER_LECTURER,
    REGISTER_STUDENT,
} from '../actions/actionTypes';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case REGISTER_LECTURER:
            return {
                ...state,
                registerLecturer: action.payload
            }
        case REGISTER_STUDENT:
            return {
                ...state,
                registerStudent: action.payload
            }
        default:
            return state;
    }
}