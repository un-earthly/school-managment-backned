const jwt = require("jsonwebtoken")

const verifyJwt = (req, res, next) => {


    const authHeader = req.headers.authorization
    if (!authHeader) {
        res.status(401).send({ "message": "Unauthorized" })
    }

    const token = authHeader.split(" ")[1]

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send({ message: 'Forbidden access' });
        }
        req.decoded = decoded;
        next()
    })

}

module.exports = verifyJwt