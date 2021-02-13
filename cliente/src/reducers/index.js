import {combineReducers} from 'redux';
import crearContactoReducer from './crearContactoReducer';
import alertaReducer from './alertaReducer';

export default combineReducers({
    usuario: crearContactoReducer,
    alerta: alertaReducer
})