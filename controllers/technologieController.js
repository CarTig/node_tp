const db = require('../database/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


//écriture des différentes routes pour la table **technologie**
//route get utilisateurs pour afficher les technologies
exports.getAllTechnologie = async(req,res)=>{
    const sql = "SELECT * from technologie";
    const resultat = await db.query(sql);
    console.log(resultat);
    res.status(200).json(resultat);
}
//route post technologie pour ajouter une technologie
exports.postTechnologie = async(req,res)=>{
    console.log(req,body);
    await db.query(`INSERT INTO technologie(nom_technologie,date_creation,nom_createur) VALUES ('${req.body.nom_technologie}', '${req.body.date_creation}', '${req.body.nom_createur}')`);
    res.status(200).json("technologie ajouté");
}
//route put technologie pour modifier une technologie
exports.putTechnologie = async(req,res)=>{
    let technologieId = req.params.id;
    console.log(req.body);
    let updateQuery = [];
    if(req.body.nom_technologie){updateQuery.push(`nom_technologie = '${req.body.nom_technologie}'`)};
    if(req.body.date_creation){updateQuery.push(`date_creation = '${req.body.date_creation}'`)};
    if(req.body.nom_createur){updateQuery.push(`nom_createur = '${req.body.nom_createur}'`)};
    await db.query(`UPDATE technologie SET ${updateQuery.join(',')} WHERE id = ${technologieId}`)
    res.status(200).json("technologie modifiée")
}
//route delete technologie pour supprimer une technologie
exports.deleteTechnologie = async(req,res)=>{
    let technologieId = req.params.id;
    console.log(req.body);
    await db.query(`DELETE FROM technologie WHERE id = ${technologieId}`)
    res.status(200).json("technologie supprimée")
}
