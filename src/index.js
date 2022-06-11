const express = require('express')
require('dotenv').config()
const cors = require('cors')
const Teachers = require('./routes/Teachers')
const adminRoute = require('./routes/Admin')
const Auth = require('./routes/Auth')
const Students = require('./routes/Students')
const app = express()
const port = 80
app.use(cors())
app.use(express.json())

app.use('/auth', Auth)
app.use('/admin', adminRoute)
app.use('/student', Students)
app.use('/teacher', Teachers)
app.listen(port)