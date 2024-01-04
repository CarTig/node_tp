const express = require('express') //utilisation du module express
const router = express.Router();
const commentaireController = require('../controllers/commentaireController')

//ajout des routes de la tables utilisateur
router.get('/commentaires', commentaireController.getAllCommentaire )
router.post('/commentaire', commentaireController.post )
router.put('/commentaire/:id', commentaireController.put)
router.post('/deleteCommentaire/:id', commentaireController.delete)


module.exports = router