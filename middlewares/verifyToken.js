const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    console.log(req.headers)
    try {
        const authHeader = req.headers.authorization;

        const token = authHeader && authHeader.split(' ')[1];
        console.log('token', token);
        if(!token){
            return res.status(403).json({message: 'Unauthorized.'})
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decodedToken;

        next();

    } catch (error) {
        return res.status(403).json({message: 'Invalid Token.'});
    }
}

module.exports = verifyToken;