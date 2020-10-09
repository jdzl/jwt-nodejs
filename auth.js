
const jwt = require('jsonwebtoken')
const fs = require('fs')
const publicKEY = fs.readFileSync('./keys/public.key', 'utf8');
//http://travistidwell.com/jsencrypt/demo/

const i = 'JDZL';          // Issuer 
const s = 'some@user.com';        // Subject 
const a = 'http://mysoftcorp.in'; // Audience
const signOptions = {
    issuer: i,
    // subject: s,
    // audience: a,
    expiresIn: "12h",
    algorithm: "RS256"
};
const verifyOptions = {
    ...signOptions,
    algorithm: [signOptions.algorithm]
};

const auth = (req, res, next) => {
    let token = req.headers['authorization'];    
    if (!token)
        return res.status(403).send({response: 'Auth token is not supplied' });

    if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
    }
    try {
        const info = jwt.verify(token, publicKEY, verifyOptions);
        if (info) {
            req.userId = info;
            return next();
        }
    } catch (error) {
        return res.status(401).send({ response: 'Failed to authenticate token.' });
    }

}

module.exports = {
    auth
}