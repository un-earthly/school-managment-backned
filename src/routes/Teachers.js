const router = require("express").Router()

router.get("/", async (req, res) => {
    res.send({ hello: " good evening teachers" })
})




module.exports = router
