const router = require('express').Router();
const model = require('../../models');
const userController = require ('../../controllers/UserControllers.js');//este es el controlador
const bcrypt = require('bcryptjs');

//url/api/user -- ruta por defecto que muestra listado de usuarios
router.get('/', async(req, res) =>{
    const user = await model.user.findAll();
    res.status(200).json(user); //Como respuesta se envía el usuario hallado
});

//url/api/user/register --- ESTE ESTA SIN USO EN EL FRONT
router.post('/register', async(req, res) => { //Para enviar datos
    req.body.password = await bcrypt.hashSync(req.body.password, 12); //Se encripta la contrase;a
    const user = await model.user.create(req.body);
    res.status(200).json(user); //Como respuesta se envía el usuario creado
});

//Aqui llamamos al controlador que es el que ejecuta la logica del inicio de sesion
router.post('/signin', userController.signin); 

module.exports = router;

