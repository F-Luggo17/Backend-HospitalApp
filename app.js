// mongodb data
// C:\Program Files\MongoDB\Server\4.2\data\

// Requires
var express = require('express');
var mongoose = require('mongoose');


// Inicializacion de variables
var app = express();

// Conexion a base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitaldb', (err, res) => {
    if (err) throw err;

    console.log('HospitalDB is: \x1b[32m%s\x1b[0m', ' online');
});


// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });
});



// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server port 3000: \x1b[32m%s\x1b[0m', ' online');
});