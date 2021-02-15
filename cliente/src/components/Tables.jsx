import React, { useEffect } from 'react'
//Redux
import {useSelector, useDispatch} from 'react-redux';
import { obtenerUsuarioAction } from '../actions/crearContactoAction';
import {Table} from './Table';

export const Tables = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        //Consultar a la API
        const cargarUsuarios = () => dispatch(obtenerUsuarioAction());
        cargarUsuarios()
        //eslint-disable-next-line
    },[])
     //Obtener el state
    const usuarios = useSelector(state => state.usuario.usuarios);
    const error = useSelector(state => state.usuario.error);
    const cargando = useSelector(state => state.usuario.loading);

    return (
        <>
            <h2 className="mb-4 mt-4">Lista de usuarios</h2>
            <hr/>
            {error? <p className="font-weight-bold alert alert-danger text-center mt-4">Hubo un error</p> : null}
            {cargando ? <p className="text-center">Cargando...</p> : null}
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Cedula</th>
                    <th scope="col">Fecha de cumpleaños</th>
                    <th scope="col">Acción</th>
                    </tr>
                </thead>
                <tbody>
                {usuarios.length === 0 ? 'No hay usuarios' : (
                    usuarios.map(usuario => (
                        <Table key={usuario.id} usuario={usuario}/>
                    ))
                ) }
                </tbody>
            </table>
        </>
    )
}
