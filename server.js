const express = require('express') //utilisation du module express
const app = express() //mise dans la constante app des éléments du module express
const cors = require('cors')

//recuperation des routes
const utilisateurRoute = require('./routes/utilisateurRoute.js')
const technologieRoute = require('./routes/technologieRoute.js')
const commentaireRoute = require('./routes/commentaireRoute.js')

//utilisation du fichier de configuration de la base de données


//middlware
app.use(express.json())
app.use(cors())


//appel des routes
app.use('/utilisateur', utilisateurRoute)
app.use('/technologie', technologieRoute)
// app.use('/commentaire', commentaireRoute)


/* //écriture des différentes routes pour la table **technologie**
//route get utilisateurs pour afficher les technologies
app.get('/technologies',async(req,res)=>{
    const sql = "SELECT * from technologie";
    const resultat = await db.query(sql);
    console.log(resultat);
    res.status(200).json(resultat);
})
//route post technologie pour ajouter une technologie
app.post('/technologie', async(req,res)=>{
    console.log(req,body);
    await db.query(`INSERT INTO technologie(nom_technologie) VALUES ('${req.body.nom_technologie}')`);
    res.status(200).json("technologie ajouté");
})
//route put technologie pour modifier une technologie
app.put('/technologie/:id', async(req,res)=>{
    let technologieId = req.params.id;
    console.log(req.body);
    let updateQuery;
    if(req.body.nom_technologie){updateQuery.push(`nom = '${req.body.nom_technologie}'`)};
    await db.query(`UPDATE technologie SET ${updateQuery.join(',')} WHERE id = ${technologieId}`)
    res.status(200).json("technologie modifiée")
})
//route delete technologie pour supprimer une technologie
app.delete('/technologie/:id', async(req,res)=>{
    let technologieId = req.params.id;
    console.log(req.body);
    await db.query(`DELETE FROM technologie WHERE id = ${technologieId}`)
    res.status(200).json("technologie supprimée")
})
 */

/* 
//écriture des différentes routes pour la table **commentaire**
//route get commentaires pour afficher les commentaires
app.get('/commentaires',async(req,res)=>{
    const sql = "SELECT * from commentaire";
    const resultat = await db.query(sql);
    console.log(resultat);
    res.status(200).json(resultat);
})
//route post commentaire pour ajouter un commentaire
app.post('/commentaire', async(req,res)=>{
    console.log(req,body);
    await db.query(`INSERT INTO commentaire(date_creation,message) VALUES ('${req.body.date_creation}', '${req.body.message}')`);
    res.status(200).json("commentaire ajouté");
})
//route put commentaire pour modifier un commentaire
app.put('/commentaire/:id', async(req,res)=>{
    let commentaireId = req.params.id;
    console.log(req.body);
    let updateQuery = [];
    if(req.body.date_creation){updateQuery.push(`date_creation = '${req.body.date_creation}'`)};
    if(req.body.message){updateQuery.push(`message = '${req.body.message}'`)};
    await db.query(`UPDATE commentaire SET ${updateQuery.join(',')} WHERE id = ${commentaireId}`)
    res.status(200).json("commentaire modifié")
})
//route delete utilisateur pour supprimer un utilisateur
app.delete('/commentaire/:id', async(req,res)=>{
    let commentaireId = req.params.id;
    console.log(req.body);
    await db.query(`DELETE FROM commentaire WHERE id = ${commentaireId}`)
    res.status(200).json("commentaire supprimé")
})

 */



//lancement, ouverture du server sur le port choisi
app.listen(3000, function(){
    console.log("le serveur est bien ouvert sur le port 3000")
})