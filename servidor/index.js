const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors')
//Crear el servidor
const app = express();
//conectar a la base de datos
conectarDB();
//habilitar cors
app.use(cors());
//Habilitar express.json
app.use(express.json({extended:true}))
//Puerto
const PORT = process.env.PORT || 4000;
//arrancar el server
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})