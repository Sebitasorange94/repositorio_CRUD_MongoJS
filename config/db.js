// Para configurar base de datos 
// vamos a usar mongoose para conectar back y front

const mongoose = require('mongoose');

require('dotenv').config();

// COnectar con mongo db
const conectarBD = ()=>{
    mongoose
    // .env porque nos conectamos con el archivo .env
    .connect(process.env.DB_MONGO)
    // Usamos .then para enviar un mensaje para cuando este conectada nuestra base de datos
    .then(()=> console.log('Estamos conectados con mongo '))
    .catch((err)=> console.error(err));
}

module.exports = conectarBD;