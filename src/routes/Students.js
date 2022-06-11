const router = require("express").Router()


router.get("/", async (req, res) => {
    res.send({ hello: " good evening students" })
})




module.exports = router