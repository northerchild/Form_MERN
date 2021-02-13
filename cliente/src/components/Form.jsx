import React from 'react'
import {useForm} from '../customHooks/useForm'

export const Form = () => {
    const [formValues, handleInputChange] = useForm({
        name:'',
        lastName:'',
        identification:'',
        email:'',
        date:'',
    });
    const {name, lastName,identification,email,date} = formValues;
    const handleContact = e =>{
        e.preventDefault();
        console.log(formValues)
    }
    return (
        <>
            <h2 className="mb-4 mt-4">Formulario</h2>
            <hr/>
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
        </>
    )
}
