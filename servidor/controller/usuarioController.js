const Usuario = require('../models/Usuario');
const {validationResult} = require('express-validator');
exports.crearUsuario = async (req,res)=>{
    //revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({errores:errores.array()})
    }
    //extraer email
    const {email} = req.body;
    try {
        //Revisar que el usuario registrado sea unico
        let usuario = await Usuario.findOne({email});
        if(usuario){
            return res.status(400).json({msg:'El usuario ya existe'});
        }
        //crear el nuevo usuario
        usuario = new Usuario(req.body);
        //guardar usuario
        await usuario.save();
    } catch (error) {
        console.log(error)
        res.status(400).send('Hubo un error');
    }
}

