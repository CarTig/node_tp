const jwt = require('jsonwebtoken')
require('dotenv').config()


exports.authenticator = (req, res, next) =>{
    // récupération du token
    const token = req.params.token ? req.params.token : req.headers.authorization
    if(token && process.env.SECRET_KEY){
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded)=>{
            // detection d'un probleme alors => erreur
            if(err){
                res.status(401).json({erreur: "accès refusé"})
            }
            // décodage puis on passe la la fnction suivante next()
            else{
                console.log(decoded);
                next()
            }
        })
    }else{
        res.status(401).json({erreur: "accès refusé"})
    }
}