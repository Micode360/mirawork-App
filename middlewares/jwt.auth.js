const jwtSecret = require('../config/keys').jwtSecret;
const jwTokens = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const token = req.header("authentication-token");
    const decoded = jwTokens.verify(token, jwtSecret);
    console.log(decoded);
    req.user = decoded.user;
    next();
}

