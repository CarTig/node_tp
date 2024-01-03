const express = require('express') //utilisation du module express
const app = express() //mise dans la constante app des éléments du module express
const cors = require('cors')

//utilisation du fichier de configuration de la base de données
const db = require('./database.js')

//middlware
app.use(express.json())
app.use(cors())

//écriture des différentes routes pour la table **utilisateur**
//route get utilisateurs pour afficher les utilisateurs
app.get('/utilisateurs',async(req,res)=>{
    const sql = "SELECT * from utilisateur";
    const resultat = await db.query(sql);
    console.log(resultat);
    res.status(200).json(resultat);
})
//route post utilisateur pour ajouter un utilisateur
app.post('/utilisateur', async(req,res)=>{
    console.log(req,body);
    await db.query(`INSERT INTO utilisateur(nom,prenom,email) VALUES ('${req.body.nom}', '${req.body.prenom}', '${req.body.email}')`);
    res.status(200).json("utilisateur ajouté");
})
//route put utilisateur pour modifier un utilisateur
app.put('/utilisateur/:id', async(req,res)=>{
    let utilisateurId = req.params.id;
    console.log(req.body);
    let updateQuery = [];
    if(req.body.nom){updateQuery.push(`nom = '${req.body.nom}'`)};
    if(req.body.prenom){updateQuery.push(`prenom = '${req.body.prenom}'`)};
    if(req.body.email){updateQuery.push(`nom = '${req.body.email}'`)};
    await db.query(`UPDATE utilisateur SET ${updateQuery.join(',')} WHERE id = ${utilisateurId}`)
    res.status(200).json("utilisateur modifié")
})
//route delete utilisateur pour supprimer un utilisateur
app.delete('/utilisateur/:id', async(req,res)=>{
    let utilisateurId = req.params.id;
    console.log(req.body);
    await db.query(`DELETE FROM utilisateur WHERE id = ${utilisateurId}`)
    res.status(200).json("utilisateur supprimé")
})


//écriture des différentes routes pour la table **technologie**
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
    if(req.body.date_creation){updateQuery.push(`nom = '${req.body.date_creation}'`)};
    if(req.body.message){updateQuery.push(`prenom = '${req.body.message}'`)};
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


//lancement, ouverture du server sur le port choisi
app.listen(3000, function(){
    console.log("le serveur est bien ouvert sur le port 3000")
})