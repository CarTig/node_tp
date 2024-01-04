const db = require('../database/database')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

//écriture des différentes routes pour la table **utilisateur**
//route get utilisateurs pour afficher les utilisateurs
exports.getAllUtilisateur = async(req,res)=>{
    const sql = "SELECT * from utilisateur";
    const resultat = await db.query(sql);
    console.log(resultat);
    res.status(200).json(resultat);
}

exports.register = async(req,res)=>{
    //verification email
    const {email,password} = req.body 
    const result = await db.query('SELECT * from utilisateur where email = ?', [email])
    if(result.length > 0){
        return res.status(401).json({error:"utilisateur existant"})
    }

    //bcrypt
    const hashMDP = await bcrypt.hash(password, 10);

    //insertion des infos email et mdp dans la bdd
    await db.query('INSERT INTO utilisateur (email,password) VALUES (?,?)',
    [email, hashMDP])

    //signature avec le token
    const token = jwt.sign({email}, process.env.SECRET_KEY, {expiresIn : '2h'})
    res.json({token})
}

exports.login = async(req,res)=>{
    //verification email
    const {email,password} = req.body 
    const result = await db.query('SELECT * from utilisateur where email = ?', [email])
    if(result.length == 0){
        return res.status(401).json({error:"utilisateur non existant"})
    }
    const utilisateur = result[0];
    console.log(utilisateur);
    
    //comparaison mdp
    const SameMDP = await bcrypt.compare(password, utilisateur.password);
    if(!SameMDP){
        return res.status(401).json({error: "mot de passe incorrect"})
    }

    //renvoie token pour signature
    const token = jwt.sign({email}, process.env.SECRET_KEY, {expiresIn : '2h'})
    res.json({token})
}
/* 
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
}) */