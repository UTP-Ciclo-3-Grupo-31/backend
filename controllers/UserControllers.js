const bcrypt = require('bcryptjs');//para encriptacion
const jwt = require('jsonwebtoken');//para guardar el token de javascript
const request  = require('express');
const models = require('../models');//para importar los modelos y poder hacer consultas

//Para hacer el login
exports.signin = async (req, res, next) => {
    try{
        const user = await models.user.findOne({where:{email: req.body.email}});
        if(user){
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password); //Validamos que el usuario existe y comparamos la contraseña
            if(passwordIsValid){
                const token = jwt.sign({
                    id: user.id,
                    main: user.name,
                    email: user.email,
                    rol: user.rol
                },'config.secret', { //esto apunta a secret/config.js
                    expiresIn: 3600,
                }
                );

                res.status(200).send({
                    auth: true,
                    accessToken: token,
                    user: user
                }); 
            }else{
                res.status(401).json({
                    error:'Contraseña incorrecta'
            })}
        }else{
            res.status(404).json({
                error:'Datos incorrectos - usuario no encontrado'
            })
        }
    }catch(error){
        res.status(500).send({
            message: 'Error->' + error
        })
        next(error); //Necesario para que no se bloquee la página
    }
};

//Para registrar
exports.register = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hashSync(req.body.password, 12); //Se encripta la contrase;a
        const user = await model.user.create(req.body);
        res.status(200).json(user); //Como respuesta se envía el usuario creado
    } catch (error) {
        
    }
};

//Para listar
exports.listar = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};