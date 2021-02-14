import{
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,
    COMENZAR_DESCARGA_USUARIOS,
    DESCARGA_USUARIO_EXITO,
    DESCARGA_USUARIO_ERROR,
    OBTENER_USUARIO_ELIMINAR,
    USUARIO_ELIMINAR_EXITO,
    USUARIO_ELIMINAR_ERROR,
    OBTENER_USUARIO_EDITAR,
    COMENZAR_EDICION_USUARIO,
    USUARIO_EDITAR_EXITO,
    USUARIO_EDITAR_ERROR,
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'
//datos iniciales 
const initialState = {
    usuarios:[],
    error:false,
    loading:false,
    usuarioeliminar:null,
    usuarioeditar:null
}

export default function foo(state=initialState, action){
    switch (action.type) {
        case COMENZAR_DESCARGA_USUARIOS: 
        case AGREGAR_USUARIO:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_USUARIO_EXITO:
            return{
                ...state,
                loading:false,
                usuarios: [...state.usuarios,action.payload]
            }
        default:
            return state;
    }
}