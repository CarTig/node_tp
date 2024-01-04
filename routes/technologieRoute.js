const express = require('express') //utilisation du module express
const router = express.Router();
const technologieController = require('../controllers/technologieController');

//ajout des routes de la tables utilisateur
router.get('/technologies', technologieController.getAllTechnologie)
router.post('/technologie', technologieController.postTechnologie)
router.put('/technologie/:id', technologieController.putTechnologie)
router.delete('/technologie/:id', technologieController.deleteTechnologie)


module.exports = router