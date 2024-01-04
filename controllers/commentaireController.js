const db = require('../database/database')



//écriture des différentes routes pour la table **commentaire**
//route get commentaires pour afficher les commentaires
exports.getAllCommentaire = async(req,res)=>{
    const sql = "SELECT * from commentaire";
    const resultat = await db.query(sql);
    console.log(resultat);
    res.status(200).json(resultat);
}
//route post commentaire pour ajouter un commentaire
exports.post = async(req,res)=>{
    console.log(req,body);
    await db.query(`INSERT INTO commentaire(date_creation,message) VALUES ('${req.body.date_creation}', '${req.body.message}')`);
    res.status(200).json("commentaire ajouté");
}
//route put commentaire pour modifier un commentaire
exports.put = async(req,res)=>{
    let commentaireId = req.params.id;
    console.log(req.body);
    let updateQuery = [];
    if(req.body.date_creation){updateQuery.push(`date_creation = '${req.body.date_creation}'`)};
    if(req.body.message){updateQuery.push(`message = '${req.body.message}'`)};
    await db.query(`UPDATE commentaire SET ${updateQuery.join(',')} WHERE id = ${commentaireId}`)
    res.status(200).json("commentaire modifié")
}
//route delete utilisateur pour supprimer un utilisateur
exports.delete = async(req,res)=>{
    let commentaireId = req.params.id;
    console.log(req.body);
    await db.query(`DELETE FROM commentaire WHERE id = ${commentaireId}`)
    res.status(200).json("commentaire supprimé")
}
