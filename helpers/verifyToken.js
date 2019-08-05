const jwt = require('jsonwebtoken')

let verifyToken = (req, res, next) => {
    console.log('Verifying')
    const bearerHeader = req.headers['authorization']
    
    if(typeof bearerHeader !== 'undefined'){
        
    } else {
        res.sendStatus(403)
    }

}

module.exports = verifyToken