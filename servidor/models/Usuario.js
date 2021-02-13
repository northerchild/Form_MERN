const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    apellido:{
        type:String,
        required:true,
        trim:true
    },
    cedula:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    fecha:{
        type:Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Usuario', UsuariosSchema);