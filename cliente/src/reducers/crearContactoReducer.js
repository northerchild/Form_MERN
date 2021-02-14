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
    USUARIO_EDITAR_EXITO,
    USUARIO_EDITAR_ERROR,
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
        case AGREGAR_USUARIO_ERROR:
        case DESCARGA_USUARIO_ERROR:
        case USUARIO_ELIMINAR_ERROR:
        case USUARIO_EDITAR_ERROR:
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        case DESCARGA_USUARIO_EXITO:
            return {
                ...state,
                loading:false,
                error:null,
                usuarios: action.payload
            }  
        case OBTENER_USUARIO_EDITAR:
                return{
                    ...state,
                    usuarioeditar: action.payload
                }
        case USUARIO_EDITAR_EXITO:
                return{
                    ...state,
                    usuarioeditar:null,
                    usuarios: state.usuarios.map(usuario =>
                        usuario.id === action.payload.id ? usuario = action.payload : usuario
                        )
                }
        case OBTENER_USUARIO_ELIMINAR:
            return{
                ...state,
                productoeliminar: action.payload
            }
        case USUARIO_ELIMINAR_EXITO:
            return{
                ...state,
                productos: state.productos.filter(producto => producto.id !== state.productoeliminar)
            }                  
        default:
            return state;
    }
}