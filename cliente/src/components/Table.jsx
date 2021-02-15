import React from 'react'
import Swal from 'sweetalert2';
//Redux
import {useDispatch} from 'react-redux';
import { borrarUsuarioAction, obtenerUsuarioEditar } from '../actions/crearContactoAction';
export const Table = ({usuario}) => {
    const {name, lastName,identification,date,id} = usuario;
    const dispatch = useDispatch();
    const confirmarEliminarUsuario = id =>{
        //preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un usuario que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                // pasarlo al action
                dispatch( borrarUsuarioAction(id) );
            }
        });
    }
    const editarUsuario = usuario => {
        dispatch( obtenerUsuarioEditar(usuario) );
        console.log(usuario)
    }
    console.log(usuario.id)
    return (
        <tr>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{identification}</td>
            <td>{date}</td>
            <td className="ml-2">
            <i className="fas fa-pen-square pointer" onClick={ () => editarUsuario(usuario) }></i> / 
            <i className="fas fa-trash-alt pointer" onClick={()=> confirmarEliminarUsuario(id)}></i>
            </td>
        </tr>
    )
}
