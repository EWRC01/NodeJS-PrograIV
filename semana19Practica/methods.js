const crypto = require('crypto');//Modulo nativo de Node JS

const authTokens = {} //Almacena los tokens de autenticacion

const getHashedPassword =(password)=>{
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const generateAuthToken=()=>{
    return crypto.randomBytes(30).toString('hex')
}

module.exports={
    getHashedPassword,
    generateAuthToken,
    authTokens
    
}