const express = require ('express');
const morgan = require('morgan');
const apiRouter = require('./routes/index'); //Accede por defecto al archivo index.js
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//Instancia de CORS para permitir lectura de recursos remotos
app.use(cors())

app.use((req, res, next) =>{
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Acces-Control-Allow-Methods: GET, POST, PUT, DELETE");
    next();
});



app.use(morgan('dev'));//Morgan es el que se encarga de detectar cambios en la pagina y actualizar el servidor
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRouter);//aqui van las rutas del login y otros
app.set('PORT', process.env.PORT || 3000);

//se crea una respuesta al ingresar a la url vacia
app.get('/', function(req, res) {
    res.send("Que estas buscando aqui?");
});

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;