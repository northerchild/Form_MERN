const express = require('express');
const cors = require('cors');
//Crear el servidor
const app = express();
//habilitar cors
app.use(cors());
//Habilitar express.json
app.use(express.json({extended:true}))
//Puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`)
})