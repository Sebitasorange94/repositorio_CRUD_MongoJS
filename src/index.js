const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// Creamos nuestro servidor
const app = express();

// Enlazar nuestra conexión con la base de datos

conectarBD();
// Vamos a trabajar con el entorno cors
app.use(cors());

app.use(express.json());
app.use('/api/clientes', require('../routes/rutas'));




// Ruta para verificar el servidor
app.get('/',(req,res) => {
    res.send('Hola mundo, desde la web!');
})


// se define unas constante par ael puerto que tendra configuracion local o en la nube del puerto
const port = process.env.PORT || 3000;


app.listen(port,()=>{
    console.log('El servidor está conectado en http://localhost:3000/');
})





