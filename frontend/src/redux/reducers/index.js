import {combineReducers} from 'redux';
import authReducer from './authReducers';


const rootReducer = combineReducers({
    authReducer, // Equals to: authReducer: authReducer,
});

export default rootReducer;