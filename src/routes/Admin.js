const verifyJwt = require("../middlewares/verifyJwt")
const verifyRole = require("../middlewares/verifyRole")


const router = require("express").Router()


router.get("/", verifyJwt, verifyRole, async (req, res) => {
    res.send({ hello: " good evening all" })
})


module.exports = router