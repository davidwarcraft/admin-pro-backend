
/* 
ruta: apli/uploads/ 
*/



const {Router } = require('express');
const {check} = require('express-validator')
const {validarCampos} = require('../middlewares/validar-campos')
const expressfileUpload = require('express-fileupload');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
   fileUpload, retornaImagen
} = require('../controllers/uploads')

const router = Router();

router.use(expressfileUpload());

router.put('/:tipo/:id',[
    validarJWT
],fileUpload);

router.get('/:tipo/:foto',[
    
],retornaImagen);






module.exports = router;