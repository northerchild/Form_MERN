import {combineReducers} from 'redux';
import crearContactoReducer from './crearContactoReducer';

export default combineReducers({
    productos: crearContactoReducer,
})