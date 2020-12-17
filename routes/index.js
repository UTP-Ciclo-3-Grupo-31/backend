//const router = require('express').Router(); // sobra de semana 3
const routerx = require('express-promise-router');
const apiRouterUser = require('./apis/users.js');//este sobra en semana 4
const categoriaRouter = require('./categoria');
const articuloRouter = require('./articulo');
const usuarioRouter = require('./usuario');


const router = routerx();


router.use('/auth', apiRouterUser); //sobra en semana 4

router.use('/categoria', categoriaRouter);
router.use('/articulo', articuloRouter);
router.use('/usuario', usuarioRouter);


module.exports = router;