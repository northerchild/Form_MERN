import{
    AGREGAR_USUARIO,
    AGREGAR_USUARIO_EXITO,
    AGREGAR_USUARIO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINAR_EXITO,
    PRODUCTO_ELIMINAR_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    COMENZAR_EDICION_PRODUCTO,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR,
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
        default:
            return state;
    }
}