import React from 'react'

export const Tables = () => {
    return (
        <>
            <h2 className="mb-4 mt-4">Lista de usuarios</h2>
            <hr/>
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
                    <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>123456</td>
                    <td>1/12/1995</td>
                    <td className="ml-2"><i className="fas fa-pen-square"></i> / <i className="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>123456</td>
                    <td>1/12/1995</td>
                    <td className="ml-2"><i className="fas fa-pen-square"></i> / <i className="fas fa-trash-alt"></i></td>
                    </tr>
                    <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>123456</td>
                    <td>1/12/1995</td>
                    <td className="ml-2"><i className="fas fa-pen-square"></i> / <i className="fas fa-trash-alt"></i></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
