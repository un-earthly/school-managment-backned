const verifyRole = async (req, res, next) => {

    const userEmail = req.decoded.email
    
    next()
}
module.exports = verifyRole