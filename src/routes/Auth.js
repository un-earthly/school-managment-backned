const router = require("express").Router()


router.get("/", async (req, res) => {
    res.send({ hello: " please provide auth " })
})




module.exports = router