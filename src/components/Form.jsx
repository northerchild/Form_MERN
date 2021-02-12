import React from 'react'

export const Form = () => {
    return (
        <>
            <h2 className="mb-4 mt-4">Formulario</h2>
            <hr/>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Nombre</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Apellido</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Fecha de cumpleaños</label>
                    <input type="date" className="form-control mb-4" id="exampleInputEmail1"/>
                </div>
                <button type="submit" className="btn btn-primary">Guardar / Actualizar</button>
            </form>
        </>
    )
}
