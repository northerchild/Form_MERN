import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
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

//Crear nuevo producto
export function crearNuevoUsuarioAction(usuario){
    return async (dispatch) =>{
        dispatch(agregarUsuario())
        try {
            //Insertar en la API
            await clienteAxios.post('/usuarios', usuario)
            //Si todo sale bien, actualizar el state
            dispatch(agregarUsuarioExito(usuario))
            Swal.fire(
                'Correcto',
                'El usuario se agrego correctamente',
                'success'
            )
        } catch (error) {
            console.log(error);
            //si hay un error cambiar el state
            dispatch(agregarUsuarioError(true))
            Swal.fire({
                icon:'error',
                title:'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }

    }
}

const agregarUsuario = () =>({
    type: AGREGAR_USUARIO,
    payload: true
})
//Si el usuario se guardar en la base de datos
const agregarUsuarioExito = usuario => ({
    type: AGREGAR_USUARIO_EXITO,
    payload: usuario
})

const agregarUsuarioError = estado =>({
    type: AGREGAR_USUARIO_ERROR,
    payload: estado
}) 
