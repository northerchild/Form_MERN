import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from '../customHooks/useForm'
import { mostrarAlerta, ocultarAlertaAction } from '../actions/alertaAction';
import { crearNuevoUsuarioAction } from '../actions/crearContactoAction'

export const Form = () => {
    const [formValues, handleInputChange, reset] = useForm({
        name:'',
        lastName:'',
        identification:'',
        email:'',
        date:'',
    });
    const {name, lastName,identification,email,date} = formValues;
    //Utilizar useDispatch y crea una nueva funcion
    const dispatch = useDispatch();
    //Acceder al state del store
    const usuarios = useSelector(state => state.usuario.usuarios);
    const error = useSelector(state => state.usuario.error);
    const alerta = useSelector(state => state.alerta.alerta);
    console.log(usuarios)
    //Mandar a llamar el action
    const agregarUsuario = usuario => dispatch(crearNuevoUsuarioAction(usuario));
    const handleContact = e =>{
        e.preventDefault();
        // validar formulario
        if(name.trim() === '' || lastName.trim() === '' || 
           identification.length < 7 || email.trim ==='' || date.trim === '') {
            const alerta = {
                msg: 'No olvides llenar todos los campos',
                classes: 'alert alert-danger text-center text-uppercase p3'
            }
            dispatch( mostrarAlerta(alerta) );

            return;
        }
        dispatch(ocultarAlertaAction())
        agregarUsuario({
            name,
            lastName,
            identification,
            email,
            date,
        });
        reset();
        console.log(formValues)
    }
    return (
        <>
            <h2 className="mb-4 mt-4">Formulario</h2>
            <hr/>
            {alerta ? <p className={alerta.classes}>{alerta.msg}</p>:null}
            <form onSubmit={handleContact}>
                <div className="form-group mb-3">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name"  value={name} onChange={handleInputChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="lastName">Apellido</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={lastName} onChange={handleInputChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="identification">cedula</label>
                    <input type="number" className="form-control" id="identification" name="identification" value={identification} onChange={handleInputChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email">Correo</label>
                    <input type="email" className="form-control" id="email" name="email" value={email} onChange={handleInputChange}/>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="date">Fecha de cumpleaños</label>
                    <input type="date" className="form-control mb-4" id="date" name="date" value={date} onChange={handleInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Guardar / Actualizar</button>
            </form>
            {error ? <p className="alert alert-danger p2 mt-4 text-center">Hubo un error</p> 
                : null}
        </>
    )
}
