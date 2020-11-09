import { combineReducers } from 'redux';
import authReducer from './authReducer';


const rootReducer = combineReducers({
    section: authReducer
});


export default rootReducer;