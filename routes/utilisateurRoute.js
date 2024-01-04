const express = require('express') //utilisation du module express
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');
const middlware = require('../middlware/middlware')

//ajout des routes de la tables utilisateur
router.get('/utilisateurs', middlware.authenticator, utilisateurController.getAllUtilisateur)
router.post('/register', utilisateurController.register)
router.post('/login', utilisateurController.login)


module.exports = router
