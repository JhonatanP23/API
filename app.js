const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
//importar las rutas
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);


app.get('/',(req,res)=>{
    res.send('prueba 1 respuesta del servidor');
});

// mongoose.connect("mongodb+srv://jhonatandavid2303:9Kv7s95hVlh5wYwK@cluster0.2da8zbt.mongodb.net/?retryWrites=true&w=majority",
// {useNewUrlParser: true},()=>{
//     console.log('Si hay conexión a la Bd');
// });

// Conexión a la base de datos
mongoose.connect('mongodb+srv://jhonatandavid:1234@cluster0.f3fskra.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true, // Cambio: useNewUrlParser en lugar de useNewUrlParsers
    useUnifiedTopology: true // Agregado: useUnifiedTopology para evitar advertencias de desaprobación
  })
  .then(() => {
    console.log('Conexión establecida');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

app.listen(10000);

